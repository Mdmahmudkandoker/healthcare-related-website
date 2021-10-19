import './Header.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { logOut } from '../../firebase/firebase';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


 function Header() {
  const [menu, setMenu] = React.useState('hide')
  const toggleMenu = () =>{
    if(menu === 'hide'){
      setMenu('show')
    } else{
      setMenu('hide')
    }
  }
   const [currentUser, setCurrentUser] = React.useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1, alignItems:'center' }}>
      <AppBar position="static" sx={{  justifyItems:'center' }}>
        <Toolbar >
            <div className="menubtn" onClick={toggleMenu}>
            <MenuIcon  id='icon' />
            </div>
           
            <LocalHospitalIcon/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      
        Mahmud Medicare
          </Typography>
       
          <nav className={menu}>
  
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/services'>Services</NavLink>
          <NavLink to='/doctors'>Doctors</NavLink>
          <NavLink to='/diagnosis'>Diagnosis</NavLink>
          </nav>


         
          {currentUser ? 
           <NavLink to='#' onClick={logOut}>Log-Out - {currentUser.displayName? currentUser.displayName :
            currentUser.email
           
           }</NavLink>
           
           :
          [  <NavLink to='/login'>Login</NavLink>,
            <NavLink to='/register'>Register</NavLink>]
        }
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header
