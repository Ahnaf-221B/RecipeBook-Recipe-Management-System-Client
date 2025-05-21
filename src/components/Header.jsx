import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const Header = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { user, signOutUser } = use(AuthContext);
	const navigate = useNavigate();
	
	const handleSignOut = () => {
		signOutUser()
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				console.error("Sign out error:", error);
			});
	};

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

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
				{!user ? (
					<>
						<Link
							to="/signin"
							className="px-2 py-2 text-lime-700 border border-lime-600 rounded hover:bg-lime-600 hover:text-white"
						>
							Login
						</Link>
						<Link
							to="/signup"
							className="px-2 py-2 text-lime-700 border border-lime-600 rounded hover:bg-lime-600 hover:text-white"
						>
							Register
						</Link>
					</>
				) : (
					<>
						<div className="relative">
							<button
								onClick={toggleDropdown}
								className="flex items-center space-x-2"
							>
								<img
									src={user.photoURL || "https://via.placeholder.com/40"}
									alt="User Profile"
									className="w-10 h-10 rounded-full"
								/>
							</button>
							{dropdownOpen && (
								<div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-60 h-auto z-50">
									<div className="py-2 px-4 text-sm text-gray-700">
										<button
											onClick={handleSignOut}
											className="btn btn-sm bg-red-700 rounded-lg text-left text-lg mt-4 py-5 px-4 text-white hover:bg-red-100"
										>
											Sign Out
										</button>
									</div>
								</div>
							)}
						</div>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
