import { FiCoffee, FiHeart, FiStar, FiClock, FiAward } from "react-icons/fi";

function FeaturedCategories() {
	const categories = [
		{
			id: 1,
			name: "Breakfast",
			description: "Start your day right",
			icon: <FiCoffee className="h-8 w-8" />,
			color: "bg-amber-100 text-amber-700",
		},
		{
			id: 2,
			name: "Healthy",
			description: "Nutritious & delicious",
			icon: <FiHeart className="h-8 w-8" />,
			color: "bg-green-100 text-green-700",
		},
		{
			id: 3,
			name: "Popular",
			description: "Fan favorites",
			icon: <FiStar className="h-8 w-8" />,
			color: "bg-blue-100 text-blue-700",
		},
		{
			id: 4,
			name: "Quick & Easy",
			description: "Ready in 30 minutes",
			icon: <FiClock className="h-8 w-8" />,
			color: "bg-purple-100 text-purple-700",
		},
		{
			id: 5,
			name: "Special Occasion",
			description: "Impressive dishes",
			icon: <FiAward className="h-8 w-8" />,
			color: "bg-red-100 text-red-700",
		},
	];

	return (
		<section className="my-12">
			<div className="mb-8 text-center">
				<h2 className="mb-2 text-3xl font-bold text-lime-400 ">
					Featured Categories
				</h2>
				<p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
					Browse our most popular recipe collections to find exactly what you're
					craving
				</p>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 p-10">
				{categories.map((category) => (
					<div
						key={category.id}
						className={`flex cursor-pointer flex-col items-center rounded-lg p-6 text-center transition-all hover:shadow-lg border dark:bg-gray-800 dark:text-white`}
						style={{ backgroundColor: category.color.split(" ")[0] }}
					>
						<div className="mb-3 rounded-full bg-white dark:bg-gray-700 p-3">
							{category.icon}
						</div>
						<h3 className="mb-1 text-lg font-semibold">{category.name}</h3>
						<p className="mb-2 text-sm">{category.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default FeaturedCategories;
