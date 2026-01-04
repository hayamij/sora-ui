/**
 * External URLs configuration
 * Centralized external URLs to avoid hardcoding throughout the codebase
 */

export const urls = {
  // GitHub URLs
  github: {
    repo: "https://github.com/axyl1410/sora-ui",
    repoPath: (path: string) =>
      `https://github.com/axyl1410/sora-ui/tree/main/apps/docs/content/docs/${path}`,
  },

  // Production URL
  production: "https://sora-ui-docs.vercel.app",

  // Development URL
  development: "http://localhost:3000",

  // Ngrok tunnel URL (for development)
  ngrok:
    process.env.NGROK_URL || "critical-nonfarcically-bethel.ngrok-free.dev",
} as const;
