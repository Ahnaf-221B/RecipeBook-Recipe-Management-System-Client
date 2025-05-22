import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import Swal from "sweetalert2";

const Details = () => {
	const data = useLoaderData();

	const [likes, setLikes] = useState(data.likes || 0);

	const handleLike = async () => {
		try {
			const response = await fetch(
				`http://localhost:3000/recipes/${data._id}/like`,
				{
					method: "PUT",
				}
			);
			const updatedRecipe = await response.json();
			setLikes(updatedRecipe.likes);
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: `${updatedRecipe.likes} people interested in`,
				showConfirmButton: false,
				timer: 1500,
			});
		} catch (error) {
			console.error("Failed to update likes", error);
		}
	};

	return (
		<section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-8">
			<img
				src={data.image}
				
				className="w-full h-64 object-cover rounded-md mb-6"
			/>

			<h1 className="text-3xl font-bold text-gray-900 mb-4">{data.title}</h1>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Ingredients</h2>
				{data.ingredients}
			</div>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Instructions</h2>
				<p className="text-gray-700 whitespace-pre-line">{data.instructions}</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 mb-6">
				<div>
					<h3 className="font-semibold">Cuisine Type</h3>
					<p>{data.cuisineType}</p>
				</div>
				<div>
					<h3 className="font-semibold">Preparation Time</h3>
					<p>{data.preparationTime} mins</p>
				</div>
				<div>
					<h3 className="font-semibold">Category</h3>
					<p>{data.categories}</p>
				</div>
			</div>

			{/* Like Button */}
			<button
				onClick={handleLike}
				className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
			>
				<FaThumbsUp />
				Like {likes}
			</button>
		</section>
	);
};

export default Details;
