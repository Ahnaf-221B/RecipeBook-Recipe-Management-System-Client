import React from "react";
import Header from "../components/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Loader from "../pages/loader/loader";

const MainLayout = () => {
	const { state } = useNavigation();

	return (
		<div>
			<Header></Header>
			<main>{state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
