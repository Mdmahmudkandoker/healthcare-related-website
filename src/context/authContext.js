import { onAuthStateChanged } from "@firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { LoaderContext } from "./loaderContext";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [loader, setLoader] = useContext(LoaderContext)
    const [currentUser, setCurrentUser] = useState(null);
    
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,  (user)=>{
    if(user){
        setCurrentUser(user);
    }else{
        setCurrentUser(null)
    }
    setLoader(false)

        
})
return () => unsubscribe();
}, [])
    return(
        <AuthContext.Provider value={[currentUser, setCurrentUser]}>
            {children}
        </AuthContext.Provider>
    )
}