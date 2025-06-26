import React from 'react'
import { NavLink } from 'react-router-dom';

const DashAside = () => {
  return (
		<div className="">
			<aside className="  bg-lime-200 p-6 space-y-4 rounded-r">
				<div className="flex items gap-4">
					<img
						src="https://i.postimg.cc/gc3L1KM1/image.png"
						alt="logo"
						className="w-12 h-12 rounded-full"
					/>
					<h2 className="text-2xl font-bold text-lime-700 mb-6">Dashboard</h2>
				</div>

				<nav className="flex flex-col space-y-2">
					<NavLink to="/" className="font-semibold text-lg">
						Home
					</NavLink>
					<NavLink to="/dashboard/allrecipe" className="font-semibold text-lg">
						All Recipes
					</NavLink>

					<NavLink to="/dashboard/addrecipe" className="font-semibold text-lg">
						Add Recipe
					</NavLink>

					<NavLink to="/dashboard/myrecipe" className="font-semibold text-lg">
						My Recipes
					</NavLink>
					<NavLink to="/dashboard/myrecipe" className="font-semibold text-lg">
						About Us
					</NavLink>
					<NavLink to="/dashboard/myrecipe" className="font-semibold text-lg">
						Contact Us
					</NavLink>
				</nav>
			</aside>
		</div>
	);
}

export default DashAside