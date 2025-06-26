import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import AddRecipe from "./pages/AddRecipe/AddRecipe.jsx";
import AllRecipe from "./pages/AllRecipe/AllRecipe.jsx";
import PrivateRoute from "./context/PrivateRoute.jsx";
import Details from "./pages/Details/Details.jsx";
import MyRecipe from "./pages/MyRecipe/MyRecipe.jsx";
import UpdateRecipe from "./pages/UpdateRecipe/UpdateRecipe.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import { ToastContainer } from "react-toastify";
import AboutUs from "./components/AboutUs.jsx";
import Contact from "./components/Contact.jsx";
import Support from "./components/Support.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import DashBoardLayout from "./layout/DashBoardLayout.jsx";
import DashAllRecipe from "./pages/DashBoardComp/DashAllRecipe.jsx";
import DashMyRecipe from "./pages/DashBoardComp/DashMyRecipe.jsx";
import DashAbout from "./pages/DashBoardComp/DashAbout.jsx";
import DashContact from "./pages/DashBoardComp/DashContact.jsx";
import DashAddRecipe from "./pages/DashBoardComp/DashAddRecipe.jsx";
import DashDetails from "./pages/DashBoardComp/DashDetails.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage></ErrorPage>,
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
				path: "/aboutus",
				element: <AboutUs></AboutUs>,
			},
			{
				path: "/contact",
				element: <Contact></Contact>,
			},
			{
				path: "/support",
				element: <Support></Support>,
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
				element: <AllRecipe></AllRecipe>,
				loader: () =>
					fetch("https://my-recipe-store-server.vercel.app/recipes"),
			},
			{
				path: "/details/:id",
				element: (
					<PrivateRoute>
						<Details></Details>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://my-recipe-store-server.vercel.app/recipes/${params.id}`
					),
			},
			{
				path: "/myrecipe",
				element: (
					<PrivateRoute>
						<MyRecipe></MyRecipe>
					</PrivateRoute>
				),
			},
			{
				path: "/updaterecipe/:id",
				loader: ({ params }) =>
					fetch(
						`https://my-recipe-store-server.vercel.app/recipes/${params.id}`
					),
				Component: UpdateRecipe,
			},
		],
	},
	{
		path: "/dashboard",
		element: <DashBoardLayout></DashBoardLayout>,
		children: [
			{
				index: true,
				element: <Dashboard></Dashboard>,
			},
			{
				path: "/dashboard/allrecipe",
				element: <DashAllRecipe></DashAllRecipe>,
				loader: () =>
					fetch("https://my-recipe-store-server.vercel.app/recipes"),
			},

			{
				path: "/dashboard/myrecipe",
				element: <DashMyRecipe></DashMyRecipe>,
			},
			{
				path: "/dashboard/dashabout",
				element: <DashAbout></DashAbout>,
			},
			{
				path: "/dashboard/dashcontact",
				element: <DashContact></DashContact>,
			},
			{
				path: "/dashboard/dashaddrecipe",
				element: <DashAddRecipe></DashAddRecipe>,
			},
			{
				path: "/dashboard/dashdetails/:id",
				element: <DashDetails></DashDetails>,
				loader: ({ params }) =>
					fetch(
						`https://my-recipe-store-server.vercel.app/recipes/${params.id}`
					)
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<ToastContainer></ToastContainer>
			<RouterProvider router={router}></RouterProvider>
		</AuthProvider>
	</StrictMode>
);
