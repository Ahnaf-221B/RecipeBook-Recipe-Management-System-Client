import React, { useState } from 'react'
import Banner from '../../components/Banner'
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import FeaturedCategories from '../../components/Featured';
import RecipeReviews from '../../components/review';

const Home = () => {
  const data = useLoaderData() || [];
  const [recipes, setrecipes] = useState(data);
  return (
		<div>
			<Banner />
      
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
				{
        data.map((recipe) => (
					<RecipeCard key={recipe._id} recipe={recipe}>
						recipes={recipes}
						setrecipes={setrecipes}
					</RecipeCard>
				))
        }
			</div>
      <FeaturedCategories ></FeaturedCategories>
      <RecipeReviews></RecipeReviews>
		</div>
	);
}

export default Home