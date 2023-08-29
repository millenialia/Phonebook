import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthBox } from 'components/AuthBox/AuthBox';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import css from './AppBar.module.css';

export default function ButtonAppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={css.header}>
          <Button sx={{ color: 'secondary.light' }}>
            <NavLink className={css.navlink} to="/">
              Home
            </NavLink>
          </Button>
          {isLoggedIn ? <UserMenu /> : <AuthBox />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
