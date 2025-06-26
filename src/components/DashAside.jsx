import React from "react";
import { NavLink } from "react-router-dom";
import {
	FaHome,
	FaPlus,
	FaUtensils,
	FaUserAlt,
	FaInfoCircle,
	FaEnvelope,
	FaChartPie,
} from "react-icons/fa";

const DashAside = () => {
	return (
		<aside className="bg-lime-200 p-6 space-y-6 rounded-r w-full h-full">
			{/* Header Logo */}
			<div className="flex items-center gap-4">
				<img
					src="https://i.postimg.cc/gc3L1KM1/image.png"
					alt="logo"
					className="w-12 h-12 rounded-full"
				/>
				<h2 className="text-2xl font-bold text-lime-700">Dashboard</h2>
			</div>

			{/* Nav Links */}
			<nav className="flex flex-col space-y-3 text-gray-800">
				<NavLink
					to="/"
					className="flex items-center gap-2 font-semibold text-lg hover:text-lime-700 transition"
				>
					<FaHome className="text-xl" />
					Home
				</NavLink>
				<NavLink
					to="/dashboard"
					end
					className="flex items-center gap-2 font-semibold text-lg hover:text-lime-700 transition"
				>
					<FaChartPie className="text-xl"/>
					Overview
				</NavLink>
				<NavLink
					to="/dashboard/allrecipe"
					className="flex items-center gap-2 font-semibold text-lg hover:text-lime-700 transition"
				>
					<FaUtensils className="text-xl" />
					All Recipes
				</NavLink>

				<NavLink
					to="/dashboard/dashaddrecipe"
					className="flex items-center gap-2 font-semibold text-lg hover:text-lime-700 transition"
				>
					<FaPlus className="text-xl" />
					Add Recipe
				</NavLink>

				<NavLink
					to="/dashboard/myrecipe"
					className="flex items-center gap-2 font-semibold text-lg hover:text-lime-700 transition"
				>
					<FaUserAlt className="text-xl" />
					My Recipes
				</NavLink>

				<NavLink
					to="/dashboard/dashabout"
					className="flex items-center gap-2 font-semibold text-lg hover:text-lime-700 transition"
				>
					<FaInfoCircle className="text-xl" />
					About Us
				</NavLink>

				<NavLink
					to="/dashboard/dashcontact"
					className="flex items-center gap-2 font-semibold text-lg hover:text-lime-700 transition"
				>
					<FaEnvelope className="text-xl" />
					Contact Us
				</NavLink>
			</nav>
		</aside>
	);
};

export default DashAside;
