import { signInWithEmailAndPassword } from '@firebase/auth'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { auth, googlePopup } from '../../firebase/firebase'


export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }
    handleChange = (e) =>{
        const {name , value} =e.target;
        this.setState({[name]:value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const {email, password} = this.state;
        signInWithEmailAndPassword(auth, email, password)
        .then(user => console.log(user))
        .catch(error => alert('something is wrong with email or password'))
    }
    render() {
        return (
            <div className='form'>
            <h1>Login Here</h1>
     <form onSubmit={this.handleSubmit}>
         <input type="email" name='email' placeholder=' enter your your Email'  onChange={this.handleChange} value={this.state.email} required/>
         <input type="password" name='password' placeholder='Enter PassWord' onChange={this.handleChange} value={this.state.password} required/>
         <button>Submit</button>
       
     </form>
       <button  className="google" onClick={googlePopup}>Sign In With Google</button>
       <h3>Dont Have An Account? <Link to='/register'>click Here</Link></h3>
      </div>
           
              
      
        )
    }
}
