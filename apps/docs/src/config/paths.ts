/**
 * Application paths configuration
 * Centralized paths to avoid hardcoding throughout the codebase
 */

export const paths = {
  // Documentation paths
  docs: {
    root: "/docs",
    gettingStarted: "/docs",
    components: "/docs/ui/components",
  },

  // Authentication paths
  auth: {
    signIn: "/auth/sign-in",
    signOut: "/auth/sign-out",
  },

  // Account paths
  account: {
    settings: "/account/settings",
  },

  // API paths
  api: {
    webhook: {
      polar: "/api/webhook/polar",
    },
  },

  // OG image paths
  og: {
    root: "/og",
    docs: "/og/docs",
  },

  // Success/redirect paths
  success: {
    checkout: "/success?checkout_id={CHECKOUT_ID}",
  },

  // Public paths
  waitlist: "/waitlist",
} as const;
