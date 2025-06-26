import React from "react";
import { Outlet } from "react-router-dom";



import DashAside from "../components/DashAside";
import Footer from "../components/Footer";

const DashBoardLayout = () => {
	// const { state } = useNavigation();

	return (
		<div className="bg-amber-50">
			<main className="max-w-11/12 mx-auto grid lg:grid-cols-4 gap-5 py-15">
				<div className="lg:col-span-1">
					<div className="bg-base-200  lg:sticky lg:top-15 h-fit overflow-y-auto rounded-xl">
						<DashAside></DashAside>
					</div>
				</div>
				<div className="lg:col-span-3">
					<div className="bg-transparent rounded-xl">
						<Outlet />
					</div>
				</div>
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default DashBoardLayout;
