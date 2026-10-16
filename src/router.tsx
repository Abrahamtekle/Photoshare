import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  return createRouter({
    routeTree,
    // GitHub Pages serves the site under /Photoshare/ (set via VITE_BASE_PATH in the workflow).
    basepath: import.meta.env.BASE_URL.replace(/\/$/, '') || '/',
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
