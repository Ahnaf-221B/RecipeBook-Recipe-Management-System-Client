import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFilter, FaSortAlphaDown } from "react-icons/fa";

import DashRecipeCard from "./DashRecipeCard";

const DashAllRecipe = () => {
	const data = useLoaderData() || [];
	const [categoryFilter, setCategoryFilter] = useState("");
	const [sortOrder, setSortOrder] = useState("");

	// Get unique categories from the data
	const categories = [
		...new Set(data.map((r) => r.categories).filter(Boolean)),
	];

	// Apply filtering and sorting
	const filteredRecipes = data
		.filter((recipe) => {
			if (!categoryFilter) return true;
			return recipe.categories?.toLowerCase() === categoryFilter.toLowerCase();
		})
		.sort((a, b) => {
			if (sortOrder === "asc") return a.title.localeCompare(b.title);
			if (sortOrder === "desc") return b.title.localeCompare(a.title);
			return 0;
		});

	return (
		<div className="p-4 md:p-6">
			<h1 className="text-3xl font-bold text-lime-500 text-center my-8">
				All Recipes
			</h1>

			{/* Filter & Sort */}
			<div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
				{/* Filter Section */}
				<div className="flex items-center gap-2">
					<FaFilter size={20} className="text-lime-600" />

					<select
						className="p-2 border-2 rounded-xl bg-white font-semibold"
						value={categoryFilter}
						onChange={(e) => setCategoryFilter(e.target.value)}
					>
						<option value="">All</option>
						{categories.map((cat, idx) => (
							<option key={idx} value={cat}>
								{cat}
							</option>
						))}
					</select>
				</div>

				{/* Sort Section */}
				<div className="flex items-center gap-2">
					<FaSortAlphaDown size={25} className="text-lime-600" />

					<select
						className="p-2 border-2 rounded-xl bg-white font-semibold"
						value={sortOrder}
						onChange={(e) => setSortOrder(e.target.value)}
					>
						<option value="">Default</option>
						<option value="asc">A → Z</option>
						<option value="desc">Z → A</option>
					</select>
				</div>
			</div>

			{/* Responsive Table */}
			<div className="w-full overflow-x-auto bg-amber-50 rounded-xl shadow-md">
				<table className="min-w-[800px] w-full table-auto text-sm md:text-base">
					<thead className="bg-lime-200 text-gray-800">
						<tr>
							<th className="p-3 text-left">Image</th>
							<th className="p-3 text-left">Title</th>
							<th className="p-3 text-left">Category</th>
							<th className="p-3 text-left">Cuisine</th>
							<th className="p-3 text-left">Prep Time</th>
							<th className="p-3 text-left">Details</th>
						</tr>
					</thead>
					<tbody>
						{filteredRecipes.length > 0 ? (
							filteredRecipes.map((recipe) => (
								<tr
									key={recipe._id}
									className="bg-white border-b hover:bg-gray-50 transition-transform hover:scale-[1.01]"
								>
									<td className="p-3">
										<img
											src={recipe.image}
											alt={recipe.title}
											className="w-20 h-16 object-cover rounded"
										/>
									</td>
									<td className="p-3 font-semibold">{recipe.title}</td>
									<td className="p-3">
										{Array.isArray(recipe.categories)
											? recipe.categories.join(", ")
											: recipe.categories}
									</td>
									<td className="p-3">{recipe.cuisineType}</td>
									<td className="p-3">{recipe.preparationTime} mins</td>
									<td className="p-3">
										<Link
											to={`/dashboard/dashdetails/${recipe._id}`}
											className="text-lime-600 font-semibold hover:underline bg-lime-300 rounded-lg p-2"
										>
											See Details
										</Link>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td
									colSpan="5"
									className="text-center text-gray-500 p-6 italic bg-white"
								>
									No recipes found.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DashAllRecipe;
