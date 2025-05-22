import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const MyRecipe = () => {
	const { user } = useContext(AuthContext);
	const [myRecipe, setMyRecipe] = useState([]);

	useEffect(() => {
		if (user?.email) {
			fetch(`http://localhost:3000/recipes/user/${user.email}`)
				.then((res) => res.json())
				.then((data) => setMyRecipe(data));
		}
	}, [user?.email]);

	const handleDelete = (_id) => {
		console.log(_id);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			console.log(result.isConfirmed);

			if (result.isConfirmed) {
				fetch(`http://localhost:3000/recipes/${_id}`, {
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
	

	return (
		<div className="max-w-4xl mx-auto my-8">
			{myRecipe.map((recipe) => (
				<section
					key={recipe._id}
					className="bg-white rounded-lg shadow-md p-6 mb-8"
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
						{/* Uncomment below if ingredients are an array */}
						{/* <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul> */}
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
						<Link to={`/updaterecipe/${recipe._id}`}
						
							
							className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
						>
							Update
						</Link>
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
	);
};

export default MyRecipe;
