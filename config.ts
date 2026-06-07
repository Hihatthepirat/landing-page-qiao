/**
 * Build-time public configuration.
 * NEXT_PUBLIC_* environment variables are statically inlined by Next at build time.
 */

/** Destination of every "See Live Demo ->" CTA. Set via .env.local (see .env.example). */
export const APP_LOGIN_URL =
  process.env.NEXT_PUBLIC_APP_LOGIN_URL ??
  "https://TODO-REPLACE-WITH-APP-LOGIN-URL.example.com";

/** Footer placeholders — replace before the pitch (tracked in LOOP_LOG.md). */
export const CONTACT_EMAIL = "hello@qiao.health";
export const REPO_URL = "https://github.com/team-qiao/qiao";
