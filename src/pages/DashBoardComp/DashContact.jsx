// src/pages/ContactUs.jsx

import React  from "react";

const DashContact = () => {
    

    return (
			<div className="min-h-screen  px-6  text-gray-800">
				<div className="max-w-4xl mx-auto bg-white rounded-xl transition transform hover:scale-[1.02] hover:shadow-lg duration-200 p-8">
					<h1 className="text-4xl font-bold mb-6 text-center text-green-600">
						Contact Us
					</h1>
					<p className="text-center text-lg mb-10">
						We'd love to hear from you! Whether you have a question, feedback,
						or just want to say hello — reach out!
					</p>

					<div className="grid md:grid-cols-2 gap-12">
						{/* Contact Info */}
						<div className="space-y-6">
							<div>
								<h2 className="text-xl font-semibold text-green-500">Email</h2>
								<p>recipebook@gmail.com</p>
							</div>
							<div>
								<h2 className="text-xl font-semibold text-green-500">Phone</h2>
								<p>+1 (555) 123-4567</p>
							</div>
							<div>
								<h2 className="text-xl font-semibold text-green-500">
									Location
								</h2>
								<p>123 Business Street, City, State 12345</p>
							</div>
						</div>

						{/* Contact Form */}
						<form className="space-y-6">
							<div>
								<label className="block text-sm font-medium mb-1">Name</label>
								<input
									type="text"
									name="name"
									className="w-full border border-gray-300 p-3 rounded"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium mb-1">Email</label>
								<input
									type="email"
									name="email"
									className="w-full border border-gray-300 p-3 rounded"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium mb-1">
									Message
								</label>
								<textarea
									name="message"
									className="w-full border border-gray-300 p-3 rounded h-32"
									required
								/>
							</div>
							<button
								type="submit"
								className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		);
};

export default DashContact;
