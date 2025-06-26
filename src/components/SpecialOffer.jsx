import React from "react";
import { FaBookOpen, FaClock, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
	return (
		<section className="bg-white m-12 py-12 px-4 md:px-16 rounded-xl shadow-md my-10">
			<div className="flex flex-col lg:flex-row items-center justify-between gap-10">
				{/* Left Content */}
				<div className="flex-1 space-y-4">
					<h2 className="text-4xl font-bold text-lime-700">
						🔥 Limited-Time Offer!
					</h2>
					<p className="text-gray-700 text-lg">
						Get our exclusive{" "}
						<span className="font-semibold">Recipe Book PDF</span> — featuring
						100+ mouth-watering dishes from around the world.
					</p>
					<ul className="space-y-2 text-gray-800">
						<li className="flex items-center gap-2">
							<FaCheckCircle className="text-green-600" /> Quick & easy meals
						</li>
						<li className="flex items-center gap-2">
							<FaCheckCircle className="text-green-600" /> Healthy ingredients
						</li>
						<li className="flex items-center gap-2">
							<FaCheckCircle className="text-green-600" /> Free lifetime access
						</li>
					</ul>

					<div className="flex items-center gap-4 mt-6">
						<FaClock className="text-red-600 text-xl" />
						<p className="text-red-600 font-semibold">
							Offer ends in: <span className="underline">3 days</span>
						</p>
					</div>

					<Link
						to="/offer"
						className="inline-block mt-6 bg-lime-500 hover:bg-lime-600 text-black font-bold px-6 py-3 rounded-lg transition"
					>
						Get The Book Now
					</Link>
				</div>

				{/* Right Image */}
				<div className="flex-1">
					<img
						src="https://i.postimg.cc/yd7G7SkN/image.png"
						alt="Recipe Book"
						className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;
