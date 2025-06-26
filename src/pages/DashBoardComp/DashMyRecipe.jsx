import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import UpdateRecipe from "../UpdateRecipe/UpdateRecipe";
import Loader from "../loader/loader";

const DashMyRecipe = () => {
	const { user } = useContext(AuthContext);
	const [myRecipe, setMyRecipe] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user?.email) {
			fetch(
				`https://my-recipe-store-server.vercel.app/recipes/user/${user.email}`
			)
				.then((res) => res.json())
				.then((data) => setMyRecipe(data));
				setLoading(false);
		}
	}, [user?.email]);
	if (loading) {
		return (
			<div className="flex justify-center items-center min-h-[60vh]">
				<Loader />
			</div>
		);
	}
	return (
		<div className="p-4 md:p-8">
			<h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-lime-800">
				My Recipes
			</h1>

			{/* Responsive wrapper */}
			<div className="w-full overflow-x-auto rounded-lg shadow-sm">
				<table className="min-w-[800px] w-full table-auto text-sm md:text-base border-collapse">
					<thead className="bg-lime-200 text-gray-800">
						<tr className="border-b-2">
							<th className="p-3 text-left">Image</th>
							<th className="p-3 text-left">Title</th>
							<th className="p-3 text-left">Ingredients</th>
							<th className="p-3 text-left">Instructions</th>
							<th className="p-3 text-left">Cuisine</th>
							<th className="p-3 text-left">Prep Time</th>
							<th className="p-3 text-left">Categories</th>
						</tr>
					</thead>
					<tbody>
						{myRecipe.map((recipe) => (
							<tr
								key={recipe._id}
								className="bg-white hover:bg-gray-100   hover:shadow-md border-b"
							>
								<td className="p-3">
									<img
										src={recipe.image}
										alt={recipe.title}
										className="w-20 h-16 object-cover rounded"
									/>
								</td>
								<td className="p-3 font-semibold">{recipe.title}</td>
								<td className="p-3 max-w-[200px]">{recipe.ingredients}</td>
								<td className="p-3 whitespace-pre-line max-w-[250px]">
									{recipe.instructions}
								</td>
								<td className="p-3">{recipe.cuisineType}</td>
								<td className="p-3">{recipe.preparationTime} mins</td>
								<td className="p-3">{recipe.categories}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DashMyRecipe;
