import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

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
							
						</div>
					</div>
				</section>
			))}
		</div>
	);
};

export default MyRecipe;
