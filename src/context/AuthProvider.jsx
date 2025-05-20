import React, { useEffect, useState } from 'react'
import { AuthContext } from "./AuthContext";
import auth from "../firebase/firebase.init";
import {
	createUserWithEmailAndPassword,
    onAuthStateChanged,
	
} from "firebase/auth";
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);


    const createUser = (email, pass) => {
			return createUserWithEmailAndPassword(auth, email, pass);
		};

        useEffect(() => {
					const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
						if (currentUser) {
							setUser(currentUser);
						
						} else {
							setUser(null);
						
						}
					});
					return () => {
						unSubscribe();
					};
				}, []);

    const userInfo = {
			createUser,
		};
  return (
		<AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
	);
}

export default AuthProvider