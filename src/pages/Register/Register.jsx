import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { Component, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Loader from '../../component/Loader/Loader';
import { AuthContext } from '../../context/authContext';
import { LoaderContext } from '../../context/loaderContext';
import { auth, googlePopup } from '../../firebase/firebase';


const Register = () =>  {
  
    ///useState inputs
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    //useState for password

    //usecontext
    const [loader, setLoader] = useContext(LoaderContext);
    const [currentUser, setCurrentUser] = useContext(AuthContext)
    //functions
    const handleDisplayName =(e) =>{
        setDisplayName(e.target.value)
    }
    const handleEmail =(e) =>{
        setEmail(e.target.value)
    }
    const handlePassword =(e) =>{
        setPassword(e.target.value)
    }
    const handleConPassword =(e) =>{
        setConPassword(e.target.value)
    }
 
   const  handleSubmit = (e) =>{
    console.log(displayName)
        e.preventDefault();
        setLoader(true)
       
        if(password === conPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log('new USer', user);
                updateProfile(auth.currentUser, {displayName}).finally(done =>  setLoader(false))
            });
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConPassword('');
        } else{
            
            alert('check your password again');
            setLoader(false)
        }
   
        
    }
  
        return (
            <div className='form'>
                  <h1>Register Here</h1>
           <form onSubmit={handleSubmit}>
               <input type="text" name='displayName' placeholder='User Name' onChange={handleDisplayName} value={displayName} required/>
               <input type="email" name='email' placeholder=' enter your your Email' onChange={handleEmail} value={email} required/>
               <input type="password" minLength='6' name='password' placeholder='Enter PassWord' onChange={handlePassword} value={password} required/>
               <br />
               (make sure is password atleast 6 character long)
               <input type="password"  minLength='6' name='conPassword' placeholder='Confirm Password' onChange={handleConPassword} value={conPassword} required/>
               <button>Submit</button>
           </form>
           <button  className="google" onClick={googlePopup}>Sign In With Google</button>
           <h3>Already an User? <Link to='/login'>click Here</Link></h3>
            </div>
        )
    
}
export default Register;