import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { Tooltip } from "react-tooltip";

const Header = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { user, signOutUser } = use(AuthContext);
	const navigate = useNavigate();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
	
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


	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
	);

	useEffect(() => {
		localStorage.setItem("theme", theme);
		const localTheme = localStorage.getItem("theme");
		document.querySelector("html").setAttribute("data-theme", localTheme);
	}, [theme]);
	
	

	const handleToggleTheme = (e) => {
		if (e.target.checked) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<header className=" shadow-md py-4 px-4 md:px-12 flex justify-between items-center relative sticky top-0 z-50 bg-amber-50 ">
			<div className="flex items-center space-x-2 flex-shrink-0">
				<img
					src="https://i.postimg.cc/gc3L1KM1/image.png"
					alt="logo"
					className="hidden md:block w-12 h-12 rounded-full"
				/>
				<span className="text-xl md:text-3xl font-bold text-lime-500">
					RecipeBook
				</span>
			</div>

			{!user ? (
				<>
					<div className="flex justify-between space-x-4 font-semibold">
						<Link
							to="/"
							className="text-lime-400 py-2 px-3 hover:text-lime-600"
						>
							Home
						</Link>
						<Link
							to="/allrecipe"
							className="text-lime-400 py-2 px-3 hover:text-lime-600"
						>
							All Recipe
						</Link>
						<Link
							to="/aboutus"
							className="text-lime-400 py-2 px-3 hover:text-lime-600"
						>
							About Us
						</Link>
						<Link
							to="/contact"
							className="text-lime-400 py-2 px-3 hover:text-lime-600"
						>
							Contact
						</Link>
						
					</div>
				</>
			) : (
				<>
					<div className="hidden md:flex space-x-4 font-semibold">
						<Link
							to="/"
							className="text-lime-400 py-2 px-3 hover:text-lime-600"
						>
							Home
						</Link>
						<Link
							to="/allrecipe"
							className="text-lime-400 py-2 px-3 hover:text-lime-600"
						>
							All Recipe
						</Link>
						<Link
							to="/addrecipe"
							className="text-lime-400 py-2 px-5 hover:text-lime-600"
						>
							Add Recipe
						</Link>
						<Link
							to="/myrecipe"
							className="text-lime-400 py-2 px-3 hover:text-lime-600"
						>
							My Recipe
						</Link>
						<Link
							to="/aboutus"
							className="text-lime-400 py-2 px-3 hover:text-lime-600"
						>
							About Us
						</Link>
						<Link
							to="/contact"
							className="text-lime-400 py-2 px-3 hover:text-lime-600"
						>
							Contact
						</Link>
					</div>
				</>
			)}

			{/* Mobile menu button */}
			<div className="md:hidden">
				<button
					onClick={toggleMobileMenu}
					type="button"
					className="inline-flex items-center justify-center p-2 rounded-md text-lime-500 hover:text-white hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded={mobileMenuOpen}
				>
					<span className="sr-only">Open main menu</span>
					{/* Hamburger icon */}
					{!mobileMenuOpen ? (
						<svg
							className="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 8h16M4 16h16"
							/>
						</svg>
					) : (
						/* Close icon */
						<svg
							className="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					)}
				</button>
			</div>

			{mobileMenuOpen && (
				<div className="md:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 font-semibold bg-white shadow-md">
						<Link
							to="/"
							className="block px-3 py-2 rounded-md text-lime-400 hover:bg-lime-100 hover:text-lime-600"
						>
							Home
						</Link>
						<Link
							to="/allrecipe"
							className="block px-3 py-2 rounded-md text-lime-400 hover:bg-lime-100 hover:text-lime-600"
						>
							All Recipe
						</Link>
						<Link
							to="/addrecipe"
							className="block px-3 py-2 rounded-md text-lime-400 hover:bg-lime-100 hover:text-lime-600"
						>
							Add Recipe
						</Link>
						<Link
							to="/myrecipe"
							className="block px-3 py-2 rounded-md text-lime-400 hover:bg-lime-100 hover:text-lime-600"
						>
							My Recipe
						</Link>
					</div>
				</div>
			)}

			<div className=""></div>

			<div className="space-x-4 flex items-center">
				<label className="swap swap-rotate">
					{/* this hidden checkbox controls the state */}
					<input onChange={handleToggleTheme} type="checkbox" />

					{/* sun icon */}
					<svg
						className="swap-off h-10 w-10 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
					</svg>

					{/* moon icon */}
					<svg
						className="swap-on h-10 w-10 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
					</svg>
				</label>
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
						<div
							className="relative"
							onMouseEnter={() => setDropdownOpen(true)}
							onMouseLeave={() => setDropdownOpen(false)}
						>
							<button
								onClick={toggleDropdown}
								className="flex items-center space-x-2"
								data-tooltip-id="user-tooltip"
								data-tooltip-place="bottom"
							>
								<img
									src={user.photoURL || "https://via.placeholder.com/40"}
									alt="User Profile"
									className="w-10 h-10 rounded-full"
								/>
							</button>
							<Tooltip id="user-tooltip" />
							{dropdownOpen && (
								<div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 max-w-xs h-auto z-50">
									<div className="py-2 px-4 text-sm text-gray-700">
										<h2 className="font-bold text-lg">{user.displayName}</h2>
										<button
											onClick={handleSignOut}
											className="btn btn-sm bg-red-700 rounded-lg text-left text-lg mt-4 py-3 px-4 text-white hover:bg-red-100"
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
