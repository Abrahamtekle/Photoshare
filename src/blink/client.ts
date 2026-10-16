import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'wfolio-portfolio-mjkf6tha',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_ia9FfFWmDSd5OeRtx4leV752Fn-6nVGd',
  authRequired: false,
  auth: { mode: 'managed' },
})
