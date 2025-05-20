import React, { useEffect, useState } from 'react'
import { AuthContext } from "./AuthContext";
import auth from "../firebase/firebase.init";
import {
	createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
	
} from "firebase/auth";
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()

    const [user, setUser] = useState(null);


    const createUser = (email, pass) => {
			return createUserWithEmailAndPassword(auth, email, pass);
		};

        const registerGoogle = () => {
					return signInWithPopup(auth, provider);
				};

                const signInUser = (email, pass) => {
									return signInWithEmailAndPassword(auth, email, pass);
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
			registerGoogle,
			signInUser,
		};
  return (
		<AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
	);
}

export default AuthProvider