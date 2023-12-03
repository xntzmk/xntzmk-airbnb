import { lazy } from 'react'
import { Route, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'

import Root from '@/App'

const Home = lazy(() => import('@/views/home'))
const Entire = lazy(() => import('@/views/entire'))
const Detail = lazy(() => import('@/views/detail'))

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Root />}>
      <Route path="/home" element={<Home />}>
      </Route>
      <Route path="/entire" element={<Entire />}>
      </Route>
      <Route path="/detail" element={<Detail />}>
      </Route>
    </Route>,
  ),
)

export default router
