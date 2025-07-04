import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import { FaFilter, FaSortAlphaDown } from "react-icons/fa";

const AllRecipe = () => {
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
		<div>
			<h1 className="text-3xl font-bold text-lime-400 text-center my-8">
				All Recipes
			</h1>

			{/* Filter & Sort Options */}
			<div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
				{/* Filter Section */}
				<div className="flex items-center gap-2">
				
						<FaFilter size={20} className="text-lime-600 md:ml-10" />
					
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
					
						<FaSortAlphaDown size={25} className="text-lime-600 " />
						
					<select
						className="p-2 border-2 rounded-xl bg-white font-semibold md:mr-6"
						value={sortOrder}
						onChange={(e) => setSortOrder(e.target.value)}
					>
						<option value="">Default</option>
						<option value="asc">A → Z</option>
						<option value="desc">Z → A</option>
					</select>
				</div>
			</div>

			{/* Recipe Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-amber-50 p-6 rounded-lg m-4">
				{filteredRecipes.length > 0 ? (
					filteredRecipes.map((recipe) => (
						<RecipeCard key={recipe._id} recipe={recipe} />
					))
				) : (
					<p className="text-center col-span-full text-gray-500">
						No recipes found.
					</p>
				)}
			</div>
		</div>
	);
};

export default AllRecipe;
