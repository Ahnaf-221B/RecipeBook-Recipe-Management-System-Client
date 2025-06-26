import React, { use } from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";
import Loader from "../pages/loader/loader";

const PrivateRoute = ({ children }) => {
	const { user } = use(AuthContext);

	const location = useLocation();
	console.log(location);

	
	if (!user) {
		return <Navigate state={location.pathname} to="/signin"></Navigate>;
	}
	return children;


	
};

export default PrivateRoute;
