import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import { FaPlus, FaThList, FaUtensils } from "react-icons/fa";

const Dashboard = () => {
	const { user } = useContext(AuthContext);
	const [totalItems, setTotalItems] = useState(0);
	const [myItems, setMyItems] = useState(0);
	const [uniqueUsers, setUniqueUsers] = useState(0);

	useEffect(() => {
		// Total Items Count & Unique Users
		fetch("https://my-recipe-store-server.vercel.app/recipes")
			.then((res) => res.json())
			.then((data) => {
				setTotalItems(data.length);

				const uniqueEmails = new Set(data.map((property) => property.email));
				setUniqueUsers(uniqueEmails.size);
			})
			.catch((err) => console.error(err));

		// My Items Count
		fetch(
			`https://my-recipe-store-server.vercel.app/recipes/user/${user?.email}`
		)
			.then((res) => res.json())
			.then((data) => setMyItems(data.length))
			.catch((err) => console.error(err));
	}, [user?.email]);
	return (
		<div>
			<h2 className="text-3xl font-bold text-gray-800">
				Overview
			</h2>
			<div className="">
				

				<div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-10">
					<div className="bg-lime-200 p-6 rounded-xl shadow text-center">
						<h3 className="text-xl font-semibold">Total Items</h3>
						<p className="text-3xl font-bold">{totalItems}</p>
					</div>
					<div className="bg-amber-200 p-6 rounded-xl shadow text-center">
						<h3 className="text-xl font-semibold">My Items</h3>
						<p className="text-3xl font-bold">{myItems}</p>
					</div>
					<div className="bg-lime-200 p-6 rounded-xl shadow text-center">
						<h3 className="text-xl font-semibold">Added Items By User</h3>
						<p className="text-3xl font-bold">{uniqueUsers}</p>
					</div>
				</div>
				<div className="bg-amber-200 p-6 rounded-xl w-full flex flex-col justify-items-start shadow  mt-10">
					<h3 className="text-xl font-bold">User Info</h3>

					<div className="flex items-center gap-4 mt-4">
						<img
							className="w-12 h-12 rounded-full"
							src={user?.photoURL}
							alt=""
						/>
						<div>
							<p className="text-xl font-bold mt-2">
								{user?.displayName}
							</p>
							<p className="text-lg font-semibold">{user?.email}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
