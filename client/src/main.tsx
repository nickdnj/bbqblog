import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Start from './pages/Start'
import Grills from './pages/Grills'
import School from './pages/School'
import Rules from './pages/Rules'
import Recipes from './pages/Recipes'
import Reserve from './pages/Reserve'
import Blog from './pages/Blog'
import Post from './pages/Post'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollRestoration />
        <Layout />
      </>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/start', element: <Start /> },
      { path: '/grills', element: <Grills /> },
      { path: '/school', element: <School /> },
      { path: '/rules', element: <Rules /> },
      { path: '/recipes', element: <Recipes /> },
      { path: '/reserve', element: <Reserve /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:slug', element: <Post /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
