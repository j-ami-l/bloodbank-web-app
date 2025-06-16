import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import LoginPage from './Components/LoginPage/LoginPage.jsx'
import Root from './Components/Root/Root.jsx'
import ActiveArea from './Components/ActiveArea/ActiveArea.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
  },
  {
    path: '/mainPage',
    Component: ActiveArea
  }
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
