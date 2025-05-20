"use client";

import { useState } from "react";
import { FiStar, FiThumbsUp, FiMessageSquare } from "react-icons/fi";

function RecipeReviews() {
	// Sample review data
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

	// Calculate average rating
	const averageRating =
		reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
	const roundedAverage = Math.round(averageRating * 10) / 10; // Round to 1 decimal place

	// Handle marking a review as helpful
	const handleHelpfulClick = (id) => {
		setReviews(
			reviews.map((review) => {
				if (review.id === id) {
					return {
						...review,
						helpful: review.isHelpful ? review.helpful - 1 : review.helpful + 1,
						isHelpful: !review.isHelpful,
					};
				}
				return review;
			})
		);
	};

	// Render stars based on rating
	const renderStars = (rating) => {
		return Array(5)
			.fill(0)
			.map((_, i) => (
				<FiStar
					key={i}
					className={`h-4 w-4 ${
						i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
					}`}
				/>
			));
	};

	return (
		<section className="my-12">
			<div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
				<div>
					<h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
					<div className="mt-2 flex items-center">
						<div className="mr-2 flex">
							{renderStars(Math.round(averageRating))}
						</div>
						<span className="text-lg font-medium text-gray-900">
							{roundedAverage}
						</span>
						<span className="ml-1 text-gray-500">
							({reviews.length} reviews)
						</span>
					</div>
				</div>
				<button className="rounded-md bg-amber-500 px-4 py-2 font-medium text-white transition-colors hover:bg-amber-600">
					Write a Review
				</button>
			</div>

			<div className="space-y-6">
				{reviews.map((review) => (
					<div
						key={review.id}
						className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
					>
						<div className="mb-4 flex items-center justify-between">
							<div className="flex items-center">
								<img
									src={review.avatar || "/placeholder.svg"}
									alt={`${review.user}'s avatar`}
									className="mr-4 h-12 w-12 rounded-full object-cover"
								/>
								<div>
									<h3 className="font-medium text-gray-900">{review.user}</h3>
									<p className="text-sm text-gray-500">{review.date}</p>
								</div>
							</div>
							<div className="flex">{renderStars(review.rating)}</div>
						</div>

						<p className="mb-4 text-gray-700">{review.comment}</p>

						<div className="flex items-center justify-between">
							<button
								onClick={() => handleHelpfulClick(review.id)}
								className={`flex items-center text-sm ${
									review.isHelpful ? "text-amber-500" : "text-gray-500"
								} hover:text-amber-500`}
							>
								<FiThumbsUp className="mr-1" />
								<span>Helpful ({review.helpful})</span>
							</button>

							<button className="flex items-center text-sm text-gray-500 hover:text-amber-500">
								<FiMessageSquare className="mr-1" />
								<span>Reply</span>
							</button>
						</div>
					</div>
				))}
			</div>

			<div className="mt-8 flex justify-center">
				<button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
					Load More Reviews
				</button>
			</div>
		</section>
	);
}

export default RecipeReviews;
