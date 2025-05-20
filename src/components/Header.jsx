import React, {  } from "react";
import { Link } from "react-router-dom";



const Header = () => {
	

	return (
		<header className="bg-blue-50 shadow-md py-4 px-4 md:px-20 flex justify-between items-center relative">
			<div className="flex items-center space-x-2">
				<img
					src="https://i.postimg.cc/gc3L1KM1/image.png"
					alt="logo"
					className="hidden md:block w-12 h-12 rounded-full"
				/>
				<span className="text-xl md:text-3xl font-bold text-lime-500">
					RecipeBook
				</span>
			</div>

			<nav className="hidden md:flex space-x-4 font-semibold">
				<Link to="/" className="text-lime-400 py-2 px-3">
					Home
				</Link>
				<Link to="/allrecipe" className="text-lime-400 py-2 px-3">
					All Recipe
				</Link>

				<Link to="/addrecipe" className=" text-lime-400 py-2 px-5">
					Add Recipe
				</Link>

				<Link to="/myrecipe" className="text-lime-400 py-2 px-3">
					My Recipe
				</Link>
				<Link to="/mywishlist" className="text-lime-400 py-2 px-3">
					My Wishlist
				</Link>
			</nav>

			<div className="space-x-4 flex items-center">
				<>
					<Link
						to="/signin"
						className="px-2 py-2 text-lime-500 border border-lime-600 rounded hover:bg-lime-600 hover:text-white"
					>
						Login
					</Link>
					<Link
						to="/signup"
						className="px-2 py-2 text-lime-500 border border-lime-600 rounded hover:bg-lime-600 hover:text-white"
					>
						Register
					</Link>
				</>
			</div>
		</header>
	);
};

export default Header;
