import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { AuthContext } from '../../context/authContext'
import { LoaderContext } from '../../context/loaderContext'


export const PrivateRoute = ({children,path}) => {
    const [currentUser, setCurrentUser] = useContext(AuthContext)
    const [loader, setLoader] = useContext(LoaderContext)
  if(loader){
      return null
  } 
    return (
        <Route exact path={path} >
            {currentUser? children : <Redirect to='/login'/>}
        </Route>
        )
}

      
  

