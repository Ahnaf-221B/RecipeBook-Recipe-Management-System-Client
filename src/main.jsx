import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home/Home.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import AuthProvider from './context/AuthProvider.jsx'

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
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/signup",
    Component: SignUp,
  }
  ]
}
	
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
       <RouterProvider router={router}></RouterProvider>
     </AuthProvider>
   
  </StrictMode>,
)
