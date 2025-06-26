import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import UpdateRecipe from "../UpdateRecipe/UpdateRecipe";

const DashMyRecipe = () => {
	const { user } = useContext(AuthContext);
	const [myRecipe, setMyRecipe] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	useEffect(() => {
		if (user?.email) {
			fetch(
				`https://my-recipe-store-server.vercel.app/recipes/user/${user.email}`
			)
				.then((res) => res.json())
				.then((data) => setMyRecipe(data));
		}
	}, [user?.email]);

	const handleDelete = (_id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://my-recipe-store-server.vercel.app/recipes/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount) {
							Swal.fire("Deleted!", "Your recipe has been deleted.", "success");
							setMyRecipe((prev) => prev.filter((r) => r._id !== _id));
						}
					});
			}
		});
	};

	const openModal = (recipe) => {
		setSelectedRecipe(recipe);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		setSelectedRecipe(null);
	};

	const refreshRecipeInList = (updatedRecipe) => {
		setMyRecipe((prev) =>
			prev.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r))
		);
	};

	return (
		<div className="p-8 overflow-x-auto">
			<h1 className="text-3xl font-bold mb-6 text-center">My Recipes</h1>
			<table className="w-full table-auto rounded-lg overflow-hidden text-sm md:text-base">
				<thead className="bg-lime-200 text-gray-800">
					<tr className="border-b-2">
						<th className="p-3 ">Image</th>
						<th className="p-3 ">Title</th>
						<th className="p-3 ">Ingredients</th>
						<th className="p-3 ">Instructions</th>
						<th className="p-3 ">Cuisine Type</th>
						<th className="p-3">Prep Time</th>
						<th className="p-3 ">Categories</th>
						
					</tr>
				</thead>
				<tbody>
					{myRecipe.map((recipe) => (
						<tr
							key={recipe._id}
							className="bg-white hover:bg-gray-100 transition border-b-2"
						>
							<td className="p-3 ">
								<img
									src={recipe.image}
									alt={recipe.title}
									className="w-24 h-20 object-cover rounded"
								/>
							</td>
							<td className="p-3  font-semibold">{recipe.title}</td>
							<td className="p-3 ">{recipe.ingredients}</td>
							<td className="p-3 whitespace-pre-line max-w-xs">
								{recipe.instructions}
							</td>
							<td className="p-3 ">{recipe.cuisineType}</td>
							<td className="p-3 ">{recipe.preparationTime} mins</td>
							<td className="p-3">{recipe.categories}</td>
							
						</tr>
					))}
				</tbody>
			</table>

			
		</div>
	);
};

export default DashMyRecipe;
