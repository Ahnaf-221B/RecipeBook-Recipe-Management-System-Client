import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const AllRecipe = () => {

    const data = useLoaderData() || [];
		const [recipes, setrecipes] = useState(data);

  return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-12">
			{data.map((recipe) => (
				<RecipeCard key={recipe._id} recipe={recipe}>
					recipes={recipes}
					setrecipes={setrecipes}
				</RecipeCard>
			))}
		</div>
	);
}

export default AllRecipe