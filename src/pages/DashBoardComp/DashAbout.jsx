

import React from 'react';

const DashAbout = () => {
	return (
		<div className="min-h-screen  text-gray-800 px-6 ">
			<div className="max-w-4xl mx-auto bg-white transition transform hover:scale-[1.02] hover:shadow-lg duration-200 rounded-lg shadow-lg p-8">
				<h1 className="text-4xl font-bold mb-6 text-center text-green-600">
					About RecipeBook
				</h1>

				<p className="text-lg mb-6 text-center">
					Welcome to <span className="font-semibold">RecipeBook</span> – your
					go-to destination for discovering, sharing, and enjoying recipes from
					all around the world.
				</p>

				<div className="grid md:grid-cols-2 gap-10 mt-10">
					<div>
						<h2 className="text-2xl font-semibold text-green-500 mb-4">
							Our Mission
						</h2>
						<p className="text-base leading-relaxed">
							Our mission is to bring together home cooks, food lovers, and
							culinary explorers in one place. Whether you're looking to try
							something new or share a family classic, RecipeBook makes it easy
							to find and share delicious recipes with the world.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-green-500 mb-4">
							What We Offer
						</h2>
						<ul className="list-disc pl-6 text-base leading-relaxed">
							<li>🌍 A wide variety of global recipes</li>
							<li>📤 Simple recipe submission for users</li>
							<li>🔍 Advanced filtering by cuisine, diet, or difficulty</li>
							<li>⭐ Community-driven ratings and reviews</li>
							<li>🎁 Seasonal offers and cooking challenges</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 text-center">
					<h2 className="text-2xl font-semibold text-green-500 mb-2">
						Join Our Culinary Journey
					</h2>
					<p className="text-base">
						At RecipeBook, we believe that cooking should be fun, inspiring, and
						accessible to everyone. Join us today and be part of a growing
						food-loving community!
					</p>
				</div>
			</div>
		</div>
	);
};

export default DashAbout;
