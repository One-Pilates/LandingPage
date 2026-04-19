# ──────────────────────────────────────────────
# Stage 1 — Build
# ──────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (layer cache)
COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile

# Asset base path — controla tanto os assets quanto o basename do React Router.
# Produção:  --build-arg VITE_BASE_PATH=/landing/
# Local/dev: não precisa passar (default "/")
ARG VITE_BASE_PATH=/
ENV VITE_BASE_PATH=$VITE_BASE_PATH

# Copy source and build
COPY . .
RUN npm run build

# ──────────────────────────────────────────────
# Stage 2 — Serve with Nginx
# ──────────────────────────────────────────────
FROM nginx:1.27-alpine AS production

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Custom config for SPA (React Router) support
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
