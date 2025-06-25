import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdPhone, MdMail, MdLocationOn } from "react-icons/md";
const Footer = () => {
	return (
		<footer className="mt-20 bg-gradient-to-r from-teal-400 to-lime-400 text-white">
			<div className="  px-4 py-8 ">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-center text-center">
					{/* Website Name and Info */}
					<div className="space-y-4">
						<div className="flex items-center justify-center gap-2">
							<img
								src="https://i.postimg.cc/gc3L1KM1/image.png"
								alt="logo"
								className="hidden md:block w-12 h-12 rounded-full"
							/>
							<h2 className="text-xl font-bold">RecipeBook</h2>
						</div>

						<p className="text-white">Providing quality services since 2020</p>
					</div>

					<div className="">
						<h2 className="font-bold text-xl">Links</h2>
						
						<div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 ">
							<Link
							to="/"
							className=" py-2 px-2 "
						>
							Home
						</Link>
						<Link
							to="/allrecipe"
							className=" py-2 px-2 "
						>
							All Recipe
						</Link>
						<Link
							to="/aboutus"
							className="py-2 px-2 "
						>
							About Us
						</Link>
						<Link
							to="/contact"
							className="py-2 px-2 "
						>
							Contact
						</Link>
						<Link
							to="/support"
							className=" py-2 px-2"
						>
							Support
						</Link>
						</div>
						
					</div>

					{/* Contact Information */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Contact Us</h3>
						<ul className="space-y-2">
							<li className="flex items-center gap-2 justify-center">
								<MdPhone className="h-4 w-4 text-white" />
								<span className="text-white">+1 (555) 123-4567</span>
							</li>
							<li className="flex items-center gap-2 justify-center">
								<MdMail className="h-4 w-4 text-white" />
								<span className="text-white">recipebook@gmail.com</span>
							</li>
							<li className="flex items-start gap-2 justify-center">
								<MdLocationOn className="h-4 w-4 text-white mt-1" />
								<span className="text-white">
									123 Business Street, City, State 12345
								</span>
							</li>
						</ul>
					</div>

					{/* Social Media Links */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Follow Us</h3>
						<div className="flex space-x-4 justify-center">
							<Link
								href="https://www.facebook.com/share/1CZ8DirUV1/?mibextid=qi2Omg"
								target="_blank"
								className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors"
								aria-label="Facebook"
							>
								<FaFacebook className="h-5 w-5" />
							</Link>
							<Link
								href="https://x.com/MostafaAhnaf_?t=RjcakY1qxqgbvzF7EzzfSA&s=09"
								target="_blank"
								className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors"
								aria-label="Twitter"
							>
								<FaTwitter className="h-5 w-5" />
							</Link>
							<Link
								href="https://instagram.com"
								target="_blank"
								className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors"
								aria-label="Instagram"
							>
								<FaInstagram className="h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-slate-800 mt-8 pt-6 text-center md:flex md:justify-center  md:text-left">
					<p className="text-white">© 2025 RecipeBook All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
