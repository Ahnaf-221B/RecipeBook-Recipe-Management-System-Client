import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const UpdateRecipe = ({ recipeData, closeModal, onUpdate }) => {
	const {
		_id,
		image,
		title,
		ingredients,
		instructions,
		cuisineType,
		preparationTime,
		categories,
	} = recipeData;

	const { user } = useContext(AuthContext);

	const handleUpdateRecipe = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const updateRecipe = Object.fromEntries(formData.entries());

		// For checkboxes categories, convert to array if multiple checked
		if (formData.getAll("categories").length > 1) {
			updateRecipe.categories = formData.getAll("categories");
		} else if (formData.getAll("categories").length === 1) {
			updateRecipe.categories = formData.getAll("categories")[0];
		} else {
			updateRecipe.categories = [];
		}

		fetch(`https://my-recipe-store-server.vercel.app/recipes/${_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updateRecipe),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Recipe Updated Successfully",
						showConfirmButton: false,
						timer: 1500,
					});
					onUpdate({ ...recipeData, ...updateRecipe });
					closeModal(); // close modal on success
				}
			});
	};

	return (
		<form
			onSubmit={handleUpdateRecipe}
			className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg"
		>
			<h2 className="text-2xl font-bold text-center mb-6">Update Recipe</h2>
			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-700">Email</label>
				<input
					type="text"
					name="email"
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					value={user?.email || ""}
					readOnly
				/>
			</div>

			{/* Repeat inputs with defaultValue from recipeData */}
			<div className="mb-4">
				<label
					htmlFor="image"
					className="block text-sm font-medium text-gray-700"
				>
					Image URL
				</label>
				<input
					type="text"
					name="image"
					defaultValue={image}
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					placeholder="Enter image URL"
				/>
			</div>

			<div className="mb-4">
				<label
					htmlFor="title"
					className="block text-sm font-medium text-gray-700"
				>
					Recipe Title
				</label>
				<input
					type="text"
					name="title"
					defaultValue={title}
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					placeholder="Enter recipe title"
				/>
			</div>

			<div className="mb-4">
				<label
					htmlFor="ingredients"
					className="block text-sm font-medium text-gray-700"
				>
					Ingredients
				</label>
				<textarea
					name="ingredients"
					defaultValue={ingredients}
					rows="4"
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					placeholder="List ingredients, separated by commas"
				></textarea>
			</div>

			<div className="mb-4">
				<label
					htmlFor="instructions"
					className="block text-sm font-medium text-gray-700"
				>
					Instructions
				</label>
				<textarea
					name="instructions"
					defaultValue={instructions}
					rows="6"
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					placeholder="Describe the cooking steps"
				></textarea>
			</div>

			<div className="mb-4">
				<label
					htmlFor="cuisineType"
					className="block text-sm font-medium text-gray-700"
				>
					Cuisine Type
				</label>
				<select
					name="cuisineType"
					defaultValue={cuisineType}
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
				>
					<option value="">Select Cuisine</option>
					<option value="Italian">Italian</option>
					<option value="Mexican">Mexican</option>
					<option value="Indian">Indian</option>
					<option value="Chinese">Chinese</option>
					<option value="Others">Others</option>
				</select>
			</div>

			<div className="mb-4">
				<label
					htmlFor="preparationTime"
					className="block text-sm font-medium text-gray-700"
				>
					Preparation Time (in minutes)
				</label>
				<input
					type="number"
					name="preparationTime"
					defaultValue={preparationTime}
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					placeholder="Enter preparation time"
				/>
			</div>

			<div className="mb-4">
				<span className="block text-sm font-medium text-gray-700">
					Categories
				</span>
				<div className="flex flex-wrap gap-4 mt-2">
					{["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((cat) => (
						<label key={cat} className="inline-flex items-center">
							<input
								type="checkbox"
								name="categories"
								value={cat}
								className="form-checkbox"
								defaultChecked={categories.includes(cat)}
							/>
							<span className="ml-2">{cat}</span>
						</label>
					))}
				</div>
			</div>

			<div className="flex justify-center mt-6">
				<button
					type="submit"
					className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
				>
					Update Recipe
				</button>
			</div>
		</form>
	);
};

export default UpdateRecipe;
