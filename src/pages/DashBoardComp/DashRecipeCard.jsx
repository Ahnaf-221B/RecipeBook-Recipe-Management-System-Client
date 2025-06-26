import React from "react";
import { Link } from "react-router-dom";

const DashRecipeCard = ({ recipe }) => {
	const { image, title, preparationTime, cuisineType, _id } = recipe;

	return (
		<section>
			<div className=" w-full max-w-sm mx-auto bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
				<img src={image} alt={title} className="w-full h-48 object-cover" />

				<div className="p-4 relative ">
					{/* Sticky Title */}
					<h3 className="text-xl font-semibold text-gray-800 mb-4  bg-white  py-2">
						{title}
					</h3>

					{/* Info Section */}
					<p className="text-gray-600 mb-2">
						<span className="font-semibold">Cuisine:</span> {cuisineType}
					</p>

					<p className="text-gray-600 mb-4">
						<span className="font-semibold">Prep Time:</span> {preparationTime}{" "}
						mins
					</p>

					{/* Details Button */}
					<Link
						to={`/details/${_id}`}
						className="block w-full text-center bg-lime-500 text-black font-semibold py-2 rounded-md hover:bg-lime-600 transition"
					>
						See Details
					</Link>
				</div>
			</div>
		</section>
	);
};

export default DashRecipeCard;
