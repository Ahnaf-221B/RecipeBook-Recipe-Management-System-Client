// src/components/SupportSection.jsx

import React, { useState } from "react";
import { MdEmail, MdHelpOutline, MdPhone } from "react-icons/md";

const Support = () => {
	return (
		<section className="bg-white py-16 px-6 text-gray-80 ">
			<div className="max-w-7xl mx-auto text-center bg-amber-50 p-8 rounded-lg ">
				<h2 className="text-4xl font-bold text-green-600 mb-4">Need Help?</h2>
				<p className="text-lg mb-12">
					We're here to support you! If you have any questions, issues, or
					feedback — just reach out.
				</p>

				<div className="grid md:grid-cols-2 gap-8 text-left g">
					{/* Contact Cards */}
					<div className="space-y-4">
						<div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition justify-center items-center flex flex-col">
							<MdEmail className="text-green-500 text-4xl mb-4" />
							<h3 className="text-xl font-semibold mb-2">Email Support</h3>
							<p className="text-sm">
								Reach us at:{" "}
								<a
									href="mailto:support@recipebook.com"
									className="text-green-600 underline"
								>
									support@recipebook.com
								</a>
							</p>
						</div>
						<div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition justify-center items-center flex flex-col">
							<MdPhone className="text-green-500 text-4xl mb-4" />
							<h3 className="text-xl font-semibold mb-2">Call Us</h3>
							<p className="text-sm">Sat–Thu: 10 AM – 6 PM</p>
							<p className="mt-2 font-medium">+880-1234-567890</p>
						</div>
					</div>

					{/* FAQ Section */}
					<div className="">
						<div className="collapse collapse-arrow bg-base-100 border border-base-300">
							<input type="radio" name="my-accordion-2" defaultChecked />
							<div className="collapse-title font-semibold">
								How can I submit a new recipe?
							</div>
							<div className="collapse-content text-sm">
								Go to the 'Add Recipe' page, fill out the form with ingredients,
								steps, and images, then submit it for review.
							</div>
						</div>
						<div className="collapse collapse-arrow bg-base-100 border border-base-300">
							<input type="radio" name="my-accordion-2" />
							<div className="collapse-title font-semibold">
								Do I need an account to view recipes?
							</div>
							<div className="collapse-content text-sm">
								No, all users can browse recipes freely. However, creating an
								account allows you to save favorites and submit your own.
							</div>
						</div>
						<div className="collapse collapse-arrow bg-base-100 border border-base-300">
							<input type="radio" name="my-accordion-2" />
							<div className="collapse-title font-semibold">
								Can I edit a recipe after posting?
							</div>
							<div className="collapse-content text-sm">
								Yes, just log in to your account and go to 'My Recipes' to edit
								or delete your submissions.
							</div>
						</div>
						<div className="collapse collapse-arrow bg-base-100 border border-base-300">
							<input type="radio" name="my-accordion-2" />
							<div className="collapse-title font-semibold">
								Is RecipeBook free to use?
							</div>
							<div className="collapse-content text-sm">
								Yes, RecipeBook is completely free for all users. You can
								browse, submit, and save recipes without any cost.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Support;
