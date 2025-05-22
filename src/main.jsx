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
import AddRecipe from './pages/AddRecipe/AddRecipe.jsx'
import AllRecipe from './pages/AllRecipe/AllRecipe.jsx'
import PrivateRoute from './context/PrivateRoute.jsx'
import Details from './pages/Details/Details.jsx'
import MyRecipe from './pages/MyRecipe/MyRecipe.jsx'
import UpdateRecipe from './pages/UpdateRecipe/UpdateRecipe.jsx'

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,

		children: [
			{
				index: true,
				
				Component: Home,
			},
			{
				path: "/signin",
				Component: SignIn,
			},
			{
				path: "/signup",
				Component: SignUp,
			},
			{
				path: "/addrecipe",
				element: (
					<PrivateRoute>
						<AddRecipe></AddRecipe>
					</PrivateRoute>
				),
			},
			{
				path: "/allrecipe",
				element: (
					<PrivateRoute>
						<AllRecipe></AllRecipe>
					</PrivateRoute>
				),
				loader: () => fetch("http://localhost:3000/recipes"),
			},
			{
				path: "/details/:id",
				element: (
					<PrivateRoute>
						
						<Details></Details>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:3000/recipes/${params.id}`),
			},
			{
				path: "/myrecipe",
				element: (
					<PrivateRoute>
						<MyRecipe></MyRecipe>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:3000/recipes/${params.email}`),
			},
			{
				path: "/updaterecipe/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:3000/recipes/${params.id}`),
				Component: UpdateRecipe,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
       <RouterProvider router={router}></RouterProvider>
     </AuthProvider>
   
  </StrictMode>,
)
