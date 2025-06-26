import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const DashAddRecipe = () => {
    const { user } = use(AuthContext);

    const handleAddRecipe = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const newRecipe = Object.fromEntries(formData.entries());
        console.log(newRecipe);

        fetch("https://my-recipe-store-server.vercel.app/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipe),
        })
            .then((res) => res.json())
            .then((data) =>
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Recipe Added Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                })
            );
    };
    return (
			<div>
				<form
					onSubmit={handleAddRecipe}
					className="max-w-4xl mt-5 mx-auto p-8 bg-white rounded-lg shadow-lg"
				>
					<h2 className="text-3xl font-bold text-center mb-8 text-lime-700">
						Add New Recipe
					</h2>

					{/* Email */}
					<div className="mb-6">
						<label className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="text"
							name="email"
							value={user?.email || ""}
							readOnly
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>

					{/* Image URL & Title */}
					<div className="grid md:grid-cols-2 gap-6 mb-6">
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Image URL
							</label>
							<input
								type="text"
								name="image"
								placeholder="Enter image URL"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Recipe Title
							</label>
							<input
								type="text"
								name="title"
								placeholder="Enter recipe title"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
					</div>

					{/* Ingredients */}
					<div className="mb-6">
						<label className="block text-sm font-medium text-gray-700">
							Ingredients
						</label>
						<textarea
							name="ingredients"
							rows="4"
							placeholder="List ingredients, separated by commas"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
						></textarea>
					</div>

					{/* Instructions */}
					<div className="mb-6">
						<label className="block text-sm font-medium text-gray-700">
							Instructions
						</label>
						<textarea
							name="instructions"
							rows="5"
							placeholder="Describe the cooking steps"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
						></textarea>
					</div>

					{/* Cuisine Type & Prep Time */}
					<div className="grid md:grid-cols-2 gap-6 mb-6">
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Cuisine Type
							</label>
							<select
								name="cuisineType"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
							>
								<option value="">Select Cuisine</option>
								<option value="Italian">Italian</option>
								<option value="Mexican">Mexican</option>
								<option value="Indian">Indian</option>
								<option value="Chinese">Chinese</option>
								<option value="Others">Others</option>
							</select>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Preparation Time (in minutes)
							</label>
							<input
								type="number"
								name="preparationTime"
								placeholder="Enter preparation time"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
					</div>

					{/* Categories (Checkboxes) */}
					<div className="mb-6">
						<span className="block text-sm font-medium text-gray-700 mb-2">
							Categories
						</span>
						<div className="flex flex-wrap gap-6">
							{["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
								(cat) => (
									<label
										key={cat}
										className="inline-flex items-center space-x-2"
									>
										<input
											type="checkbox"
											name="categories"
											value={cat}
											className="form-checkbox text-blue-600"
										/>
										<span>{cat}</span>
									</label>
								)
							)}
						</div>
					</div>

					{/* Submit */}
					<div className="flex justify-center">
						<button
							type="submit"
							className="bg-lime-700 text-white py-2 px-6 rounded-lg font-semibold"
						>
							Add Recipe
						</button>
					</div>
				</form>
			</div>
		);
};

export default DashAddRecipe;
