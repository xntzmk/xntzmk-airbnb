import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import 'virtual:uno.css'
import '@unocss/reset/normalize.css'
import '@/styles/index.less'

import { RouterProvider } from 'react-router-dom'
import router from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback="Loading...">
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
