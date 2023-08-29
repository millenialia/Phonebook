import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import css from "./AuthBox.module.css";



export const AuthBox = () => {
  return (
                  <Box>

            <Button sx={{color: 'secondary.light' }}><NavLink className={css.navlink} to='/login'>Log In</NavLink></Button>


            <Button sx={{color: 'secondary.light' }}><NavLink className={css.navlink} to='/signup'>Sign Up</NavLink></Button>

</Box>
  )
}
