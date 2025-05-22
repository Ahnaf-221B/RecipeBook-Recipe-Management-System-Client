import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft, FiChevronRight, FiClock } from "react-icons/fi";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter"; // Import Typewriter

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const recipeData = [
	{
		id: 1,
		title: "Homemade Margherita Pizza",
		description:
			"Classic Italian pizza with fresh mozzarella, tomatoes, and basil",
		prepTime: "30 min",
		image: "https://i.postimg.cc/FFZpfvCg/image.png",
		category: "Italian",
	},
	{
		id: 2,
		title: "Avocado & Quinoa Bowl",
		description:
			"Nutritious bowl with avocado, quinoa, roasted vegetables and tahini dressing",
		prepTime: "25 min",
		image: "https://i.postimg.cc/ZqqrSy9p/image.png",
		category: "Healthy",
	},
	{
		id: 3,
		title: "Chocolate Lava Cake",
		description:
			"Decadent dessert with a molten chocolate center and vanilla ice cream",
		prepTime: "40 min",
		image: "https://i.postimg.cc/8cLvHR3Q/image.png",
		category: "Dessert",
	},
];

const Banner = () => {
	return (
		<div className="relative mt-20 p-10 w-full overflow-hidden rounded-lg bg-amber-50">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				pagination={{ clickable: true }}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				loop={true}
				className="recipe-banner-swiper"
			>
				{recipeData.map((recipe) => (
					<SwiperSlide key={recipe.id}>
						<div className="flex flex-col md:flex-row">
							{/* Image */}
							<div className="relative h-60 w-full md:h-80 md:w-1/2 ">
								<img
									src={recipe.image || "/placeholder.svg"}
									alt={recipe.title}
									className="h-full w-full object-cover rounded-xl"
								/>
								<div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-medium text-amber-600">
									{recipe.category}
								</div>
							</div>

							{/* Content */}
							<div className="flex w-full flex-col justify-center p-6 md:w-1/2">
								<h2 className="mb-2 text-2xl font-bold text-gray-900">
									<Typewriter
										words={[recipe.title]} // Entire title here
										loop={true}
										cursor
										cursorStyle="|"
										typeSpeed={100}
										deleteSpeed={50}
										delaySpeed={1000}
									/>
								</h2>
								<p className="mb-4 text-gray-600">{recipe.description}</p>

								<div className="mb-4 flex space-x-4">
									<div className="flex items-center">
										<FiClock className="mr-1 text-amber-500" />
										<span className="text-sm text-gray-600">
											{recipe.prepTime}
										</span>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<button className="swiper-button-prev absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full">
				<FiChevronLeft className="text-amber-600" />
			</button>
			<button className="swiper-button-next absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full">
				<FiChevronRight className="text-amber-600" />
			</button>
		</div>
	);
};

export default Banner;
