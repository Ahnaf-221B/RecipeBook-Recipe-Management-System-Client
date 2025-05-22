import { useState } from "react";

function RecipeReviews() {
	
	const initialReviews = [
		{
			id: 1,
			user: "Sarah Johnson",
			avatar: "https://i.pravatar.cc/150?img=1",
			date: "May 15, 2025",
			rating: 5,
			comment:
				"This recipe was absolutely delicious! The flavors blended perfectly, and my family loved it. I added a bit more garlic than suggested and it turned out amazing. Will definitely make this again!",
			helpful: 24,
			isHelpful: false,
		},
		{
			id: 2,
			user: "Michael Chen",
			avatar: "https://i.pravatar.cc/150?img=8",
			date: "May 12, 2025",
			rating: 4,
			comment:
				"Great recipe overall! I reduced the cooking time by 5 minutes and it was perfect for my taste. The sauce was rich and flavorful. Would recommend trying this with a side of roasted vegetables.",
			helpful: 16,
			isHelpful: false,
		},
		{
			id: 3,
			user: "Emma Wilson",
			avatar: "https://i.pravatar.cc/150?img=5",
			date: "May 10, 2025",
			rating: 5,
			comment:
				"I've tried many similar recipes before, but this one stands out! The instructions were clear and easy to follow. I appreciated the tips about ingredient substitutions as I had to make a few changes based on what I had available.",
			helpful: 31,
			isHelpful: false,
		},
		{
			id: 4,
			user: "David Rodriguez",
			avatar: "https://i.pravatar.cc/150?img=3",
			date: "May 8, 2025",
			rating: 3,
			comment:
				"The flavor was good, but I found the cooking time to be a bit off. Mine needed an extra 10 minutes to fully cook through. The spice level was perfect though, and I'll try it again with the adjusted cooking time.",
			helpful: 8,
			isHelpful: false,
		},
	];

	const [reviews, setReviews] = useState(initialReviews);

	return (
		<section className="my-12">
			<div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<div>
					<h2 className="text-3xl font-bold text-lime-400 ">
						Customer Reviews
					</h2>
				</div>
			</div>

			<div className="space-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-20">
				{reviews.map((review) => (
					<div
						key={review.id}
						className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
					>
						<div className="mb-4 flex items-center justify-between">
							<div className="flex items-center">
								<img
									src={review.avatar || "/placeholder.svg"}
									alt={`${review.user}'s avatar`}
									className="mr-4 h-12 w-12 rounded-full object-cover"
								/>
								<div>
									<h3 className="font-medium text-gray-900 dark:text-white">
										{review.user}
									</h3>
									<p className="text-sm text-gray-500 dark:text-gray-300">
										{review.date}
									</p>
								</div>
							</div>
						</div>

						<p className="mb-4 text-gray-700 dark:text-gray-300">
							{review.comment}
						</p>

						
					</div>
				))}
			</div>
		</section>
	);
}

export default RecipeReviews;
