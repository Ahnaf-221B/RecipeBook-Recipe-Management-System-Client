import React, { use } from 'react'
import { AuthContext } from "../../context/AuthContext";
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateRecipe = () => {
    const {
			_id,
		
			image,
			title,
			ingredients,
			instructions,
			cuisineType,
			preparationTime,
            categories
		} = useLoaderData();
        console.log(title,ingredients);
        

    const { user } = use(AuthContext);
    const handleUpdateRecipe =(e) =>{

        e.preventDefault();
        const form = e.target;
				const formData = new FormData(form);
				const updateRecipe = Object.fromEntries(formData.entries());
				console.log(updateRecipe);

                fetch(`http://localhost:3000/recipes/${_id}`, {
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
												title: "Coffe Updated Successfully",
												showConfirmButton: false,
												timer: 1500,
											});
										}
										console.log(data);
									});

    }
  return (
		<div>
			<form
				onSubmit={handleUpdateRecipe}
				className="max-w-2xl mt-5 mx-auto p-6 bg-white rounded-lg shadow-lg "
			>
				<h2 className="text-2xl font-bold text-center mb-6">Update Recipe</h2>
				{/**read only email  */}
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						type="text"
						name="email"
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
						value={user?.email || ""}
						readOnly
					/>
				</div>
				{/* Image Input */}
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

				{/* Title Input */}
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

				{/* Ingredients Input */}
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

				{/* Instructions Input */}
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

				{/* Cuisine Type Dropdown */}
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

				{/* Preparation Time Input */}
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

				{/* Categories (Checkboxes) */}
				<div className="mb-4">
					<span className="block text-sm font-medium text-gray-700">
						Categories
					</span>
					<div className="flex flex-wrap gap-4 mt-2">
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								name="categories"
								value="Breakfast"
								className="form-checkbox"
								defaultChecked={categories.includes("Breakfast")}
							/>
							<span className="ml-2">Breakfast</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								name="categories"
								value="Lunch"
								className="form-checkbox"
								defaultChecked={categories.includes("Lunch")}
							/>
							<span className="ml-2">Lunch</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								name="categories"
								value="Dinner"
								className="form-checkbox"
								defaultChecked={categories.includes("Dinner")}
							/>
							<span className="ml-2">Dinner</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								name="categories"
								value="Dessert"
								className="form-checkbox"
								defaultChecked={categories.includes("Dessert")}
							/>
							<span className="ml-2">Dessert</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								name="categories"
								value="Vegan"
								className="form-checkbox"
								defaultChecked={categories.includes("Vegan")}
							/>
							<span className="ml-2">Vegan</span>
						</label>
					</div>
				</div>

				{/* Submit Button */}
				<div className="flex justify-center mt-6">
					<button
						type="submit"
						className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
					>
						Update Recipe
					</button>
				</div>
			</form>
		</div>
	);
}

export default UpdateRecipe