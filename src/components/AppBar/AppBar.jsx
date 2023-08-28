import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authorithation/operations';
import { useAuth } from 'hooks/useAuth';

import css from "./AppBar.module.css";






export default function ButtonAppBar() {

    const dispatch = useDispatch();
    const { user } = useAuth();
  const { isLoggedIn } = useAuth();

    return (

      <Box >
      <AppBar position="static" >
        <Toolbar className={css.header}>

              <Button sx={{color: 'secondary.light' }}  ><NavLink className={css.navlink} to='/'>Home</NavLink></Button>

            {isLoggedIn ? <div className={css.userMenu }>

            <Button sx={{color: 'secondary.light' }}><NavLink className={css.navlink} to='/contacts'>Contacts</NavLink></Button>

            <Typography>
             Welcome, {user.name}
          </Typography>
        <Button sx={{color: 'secondary.light' }} onClick={() => dispatch(logOut())}>Logout</Button>
</div>: <Box className={css.authBox}>


            <Button sx={{color: 'secondary.light' }}><NavLink className={css.navlink} to='/login'>Log In</NavLink></Button>


            <Button sx={{color: 'secondary.light' }}><NavLink className={css.navlink} to='/signup'>Sign Up</NavLink></Button>

</Box>}
        </Toolbar>
      </AppBar>
      </Box>
  );
}
