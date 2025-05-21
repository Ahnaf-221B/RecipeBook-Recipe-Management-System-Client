import React, { use } from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
	const { user } = use(AuthContext);

	const location = useLocation();
	console.log(location);

	if (user && user?.email) {
		return children;
	}
	return <Navigate state={location.pathname} to="/signin"></Navigate>;

	//if-> user thake return children
	// navigate--> Login
};

export default PrivateRoute;
