import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import UpdateRecipe from "../UpdateRecipe/UpdateRecipe"; 
import Loader from "../loader/loader";
const MyRecipe = () => {
	const { user } = useContext(AuthContext);
	const [myRecipe, setMyRecipe] = useState([]);
const [loading, setLoading] = useState(true);
	// Modal state
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	useEffect(() => {
		if (user?.email) {
			fetch(
				`https://my-recipe-store-server.vercel.app/recipes/user/${user.email}`
			)
				.then((res) => res.json())
				.then((data) => setMyRecipe(data));
				setLoading(false)
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
							Swal.fire({
								title: "Deleted!",
								text: "Your Recipe has been deleted.",
								icon: "success",
							});
							const remainingRecipe = myRecipe.filter((cof) => cof._id !== _id);
							setMyRecipe(remainingRecipe);
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
		setMyRecipe((prevRecipes) =>
			prevRecipes.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r))
		);
	};

	return (
		<div className="relative">
				{loading ? (
			<div className="flex justify-center items-center min-h-[60vh]">
				<Loader />
			</div>
		) : (
			<div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-8 p-12 ">
				{myRecipe.map((recipe) => (
					<section
						key={recipe._id}
						className="bg-amber-50 rounded-lg shadow-md p-6 mb-8 "
					>
						<img
							src={recipe.image}
							alt={recipe.title}
							className="w-full h-64 object-cover rounded-md mb-6"
						/>

						<h1 className="text-3xl font-bold text-gray-900 mb-4">
							{recipe.title}
						</h1>

						<div className="mb-6">
							<h2 className="text-xl font-semibold mb-2">Ingredients</h2>
							{recipe.ingredients}
						</div>

						<div className="mb-6">
							<h2 className="text-xl font-semibold mb-2">Instructions</h2>
							<p className="text-gray-700 whitespace-pre-line">
								{recipe.instructions}
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 mb-6">
							<div>
								<h3 className="font-semibold">Cuisine Type</h3>
								<p>{recipe.cuisineType}</p>
							</div>
							<div>
								<h3 className="font-semibold">Preparation Time</h3>
								<p>{recipe.preparationTime} mins</p>
							</div>
							<div>
								<h3 className="font-semibold">Categories</h3>
								<p>{recipe.categories}</p>
							</div>
						</div>

						{/* Buttons */}
						<div className="flex gap-4">
							<button
								onClick={() => openModal(recipe)}
								className="bg-amber-300 text-black px-4 py-2 rounded transition"
							>
								Update
							</button>
							<button
								onClick={() => handleDelete(recipe._id)}
								className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
							>
								Delete
							</button>
						</div>
					</section>
				))}
			</div>

			)}
			{/* Modal */}
			{modalOpen && selectedRecipe && (
				<div
					className="fixed inset-0 backdrop-blur-sm bg-black/40  bg-opacity-50 flex justify-center items-center z-50 p-4"
					onClick={closeModal}
				>
					<div
						className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-6"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close button */}
						<button
							onClick={closeModal}
							className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-3xl font-bold z-50"
							aria-label="Close modal"
						>
							&times;
						</button>

						<UpdateRecipe
							recipeData={selectedRecipe}
							closeModal={closeModal}
							onUpdate={refreshRecipeInList}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default MyRecipe;
