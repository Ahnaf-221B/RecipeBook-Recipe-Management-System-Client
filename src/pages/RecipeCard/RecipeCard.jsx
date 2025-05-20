import React from 'react'

const RecipeCard = ({recipe}) => {
    const { image, title, preparationTime, cuisineType} = recipe;

  return (
		<div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
			<img
				src={image}
				alt={recipe.title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4">
				<h3 className="text-xl font-semibold text-gray-800 mb-2">
					{title}
				</h3>

				<p className="text-gray-600 mb-1">
					<span className="font-semibold">Cuisine:</span> {cuisineType}
				</p>

				<p className="text-gray-600 mb-1">
					<span className="font-semibold">Prep Time:</span>{" "}
					{preparationTime} mins
				</p>

				
			</div>
		</div>
	);
}

export default RecipeCard