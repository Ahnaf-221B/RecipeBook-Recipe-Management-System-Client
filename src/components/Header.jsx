import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Tooltip } from "react-tooltip";

const Header = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { user, signOutUser } = useContext(AuthContext);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
	const navigate = useNavigate();

	// Scroll background effect
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Theme logic
	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const handleSignOut = () => {
		signOutUser()
			.then(() => navigate("/"))
			.catch((err) => console.error(err));
	};

	return (
		<header
			className={`w-full py-3 px-4 md:px-12 sticky top-0 z-50 transition-all duration-300 ${
				scrolled ? "bg-white shadow-md" : "bg-transparent shadow-lg"
			}`}
		>
			<div className="flex justify-between items-center">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2">
					<img
						src="https://i.postimg.cc/gc3L1KM1/image.png"
						alt="logo"
						className="w-10 h-10 md:w-12 md:h-12 rounded-full"
					/>
					<h1 className="text-xl md:text-3xl font-bold text-lime-500">
						RecipeBook
					</h1>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center space-x-6 font-semibold">
					<Link to="/" className="text-lime-400 hover:text-lime-600">
						Home
					</Link>
					<Link to="/allrecipe" className="text-lime-400 hover:text-lime-600">
						All Recipe
					</Link>
					{user && (
						<>
							<Link
								to="/addrecipe"
								className="text-lime-400 hover:text-lime-600"
							>
								Add Recipe
							</Link>
							<Link
								to="/myrecipe"
								className="text-lime-400 hover:text-lime-600"
							>
								My Recipe
							</Link>
							<Link to="/dashboard" className="text-lime-400 hover:text-lime-600">
						Dashboard
					</Link>
						</>
					)}
					<Link to="/aboutus" className="text-lime-400 hover:text-lime-600">
						About Us
					</Link>
					<Link to="/contact" className="text-lime-400 hover:text-lime-600">
						Contact
					</Link>
					
				</nav>

				{/* Right side: Theme toggle + Auth */}
				<div className="flex items-center gap-4">
					{/* Theme Toggle */}
					<label className="swap swap-rotate">
						<input
							type="checkbox"
							onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
							checked={theme === "dark"}
						/>
						{/* Sun */}
						<svg className="swap-off w-6 h-6 fill-current" viewBox="0 0 24 24">
							<path d="M5.64,17l-.71.71...Z" />
						</svg>
						{/* Moon */}
						<svg className="swap-on w-6 h-6 fill-current" viewBox="0 0 24 24">
							<path d="M21.64,13a1...Z" />
						</svg>
					</label>

					{/* User Auth */}
					{user ? (
						<div
							className="relative"
							onMouseEnter={() => {
								if (window.innerWidth >= 768) setDropdownOpen(true);
							}}
							onMouseLeave={() => {
								if (window.innerWidth >= 768) setDropdownOpen(false);
							}}
						>
							<button
								onClick={() => setDropdownOpen(!dropdownOpen)}
								{...(window.innerWidth >= 768 && {
									"data-tooltip-id": "user-tooltip",
									"data-tooltip-content": user.displayName,
								})}
							>
								<img
									src={user.photoURL || "https://via.placeholder.com/40"}
									alt="Profile"
									className="w-10 h-10 rounded-full"
								/>
							</button>

							{dropdownOpen && (
								<div className="absolute right-0 mt-2 bg-white rounded shadow-lg w-48">
									<div className="p-4 text-gray-700">
										<h2 className="font-bold text-lg">{user.displayName}</h2>
										<button
											onClick={handleSignOut}
											className="w-full mt-3 text-left bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
										>
											Sign Out
										</button>
									</div>
								</div>
							)}
						</div>
					) : (
						<div className="space-x-2 font-semibold">
							<Link
								to="/signin"
								className="text-lime-600 border px-3 py-1 rounded hover:bg-lime-600 hover:text-white"
							>
								Login
							</Link>
							<Link
								to="/signup"
								className="text-lime-600 border px-3 py-1 rounded hover:bg-lime-600 hover:text-white"
							>
								Register
							</Link>
						</div>
					)}

					{/* Mobile Menu Toggle */}
					<button
						className="md:hidden focus:outline-none text-lime-500"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{mobileMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 8h16M4 16h16"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="md:hidden mt-4 space-y-2 text-center font-semibold bg-white rounded-lg shadow-lg py-4">
					<Link to="/" className="block text-lime-600 hover:underline">
						Home
					</Link>
					<Link to="/allrecipe" className="block text-lime-600 hover:underline">
						All Recipe
					</Link>
					{user && (
						<>
							<Link
								to="/addrecipe"
								className="block text-lime-600 hover:underline"
							>
								Add Recipe
							</Link>
							<Link
								to="/myrecipe"
								className="block text-lime-600 hover:underline"
							>
								My Recipe
							</Link>
							<Link
								to="/dashboard"
								className="block text-lime-600 hover:underline"
							>
								Dashboard
							</Link>
						</>
					)}
					<Link to="/aboutus" className="block text-lime-600 hover:underline">
						About Us
					</Link>
					<Link to="/contact" className="block text-lime-600 hover:underline">
						Contact
					</Link>
				</div>
			)}
		</header>
	);
};

export default Header;
