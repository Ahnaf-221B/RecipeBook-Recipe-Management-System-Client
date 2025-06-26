import React from "react";
import { Outlet } from "react-router-dom";
import DashAside from "../components/DashAside";
import Footer from "../components/Footer";

const DashBoardLayout = () => {
	return (
		<div className="bg-gradient-to-r from-amber-50 to-amber-100 min-h-screen flex flex-col">
			<main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6 flex-grow">
				{/* Sidebar */}
				<aside className="lg:col-span-1">
					<div className="bg-base-200 rounded-xl lg:sticky lg:top-25 max-h-[90vh] overflow-y-auto">
						<DashAside />
					</div>
				</aside>

				{/* Main Content */}
				<section className="lg:col-span-3">
					<div className="bg-transparent rounded-xl p-2 ">
						<Outlet />
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default DashBoardLayout;
