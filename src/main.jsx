import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home/Home.jsx'

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
	
  children:[
    {
		index: true,
		loader: () => fetch("http://localhost:3000"),
		Component: Home,
	},
  {
    path: "/allrecipe",
  }
  ]
}
	
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
