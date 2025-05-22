import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import { Link, useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import FeaturedCategories from '../../components/Featured';
import RecipeReviews from '../../components/Review';

const Home = () => {
  
 
  const [topRecipes, setTopRecipes] = useState([]);


  useEffect(() => {
		const fetchTopRecipes = async () => {
			try {
				const response = await fetch("http://localhost:3000/recipes/like/top");
				const data = await response.json();
				setTopRecipes(data);
			} catch (error) {
				console.error("Failed to fetch top recipes", error);
			}
		};

		fetchTopRecipes();
	}, []);
  
  return (
		<div>
			<Banner />
			<div className="bg-amber-50 rounded-lg m-1 mt-10">
				<div className="mt-10 text-lime-400  flex justify-center items-center font-bold text-3xl">
					Top Recipes
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
					{topRecipes.map((recipe) => (
						<RecipeCard key={recipe._id} recipe={recipe}>
							
						</RecipeCard>
					))}
				</div>

				<div className="flex justify-center mt-4 ">
					<Link
						className="w-70  bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-center mb-5"
						to="/allrecipe"
					>
						See All
					</Link>
				</div>
			</div>

			<FeaturedCategories></FeaturedCategories>
			<RecipeReviews></RecipeReviews>
		</div>
	);
}

export default Home