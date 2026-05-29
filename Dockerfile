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

# URL pública do site (usada para SEO / meta tags)
ARG VITE_SITE_URL=https://example.com
ENV VITE_SITE_URL=$VITE_SITE_URL

# WhatsApp
ARG VITE_WHATSAPP_NUMBER=5511999999999
ARG VITE_WHATSAPP_MESSAGE=Ola! Gostaria de mais informacoes sobre o One Pilates.
ENV VITE_WHATSAPP_NUMBER=$VITE_WHATSAPP_NUMBER
ENV VITE_WHATSAPP_MESSAGE=$VITE_WHATSAPP_MESSAGE

# Informações de contato
ARG VITE_EMAIL=contato@onepilates.com.br
ARG VITE_PHONE=11 99999-9999
ARG VITE_ADDRESS=Sao Paulo, SP
ENV VITE_EMAIL=$VITE_EMAIL
ENV VITE_PHONE=$VITE_PHONE
ENV VITE_ADDRESS=$VITE_ADDRESS

# EmailJS
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID
ARG VITE_EMAILJS_PUBLIC_KEY
ARG VITE_EMAILJS_TO_EMAIL
ENV VITE_EMAILJS_SERVICE_ID=$VITE_EMAILJS_SERVICE_ID
ENV VITE_EMAILJS_TEMPLATE_ID=$VITE_EMAILJS_TEMPLATE_ID
ENV VITE_EMAILJS_PUBLIC_KEY=$VITE_EMAILJS_PUBLIC_KEY
ENV VITE_EMAILJS_TO_EMAIL=$VITE_EMAILJS_TO_EMAIL

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
