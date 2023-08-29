import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authorisation/operations'; // Corrected the typo here

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box className={css.userMenu}>
      <Button sx={{ color: 'secondary.light' }}>
        <NavLink className={css.navlink} to="/contacts">
          Contacts
        </NavLink>
      </Button>
      <div className={css.userBox}>
        <Typography>
          Welcome, {user.name}
        </Typography>
        <Button
          sx={{ color: 'secondary.light' }}
          onClick={() => dispatch(logOut())}
        >
          Log out
        </Button>
      </div>
    </Box>
  );
};
