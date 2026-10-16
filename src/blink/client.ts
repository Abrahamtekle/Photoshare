import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'wfolio-portfolio-app-tskv9yy7',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_ohZV7zkhpE1ObnhHODkIuKR3nglgd47D',
  authRequired: false,
  auth: { mode: 'managed' },
})
