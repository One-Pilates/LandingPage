/**
 * Prefix a public-folder path with Vite's BASE_URL.
 *
 * Hardcoded absolute paths like "/background.png" are NOT rewritten by Vite
 * when the `base` option is set. Use this helper so every path is correctly
 * prefixed in any deployment (root or sub-path).
 *
 * Dev  (base: "/")         → asset("/bg.png") === "/bg.png"
 * Prod (base: "/landing/") → asset("/bg.png") === "/landing/bg.png"
 */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
