import { Outlet } from 'react-router-dom';
import ButtonAppBar from './AppBar/AppBar';
import { Suspense } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, grey } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: grey[900],
      light: green[50],
    },
  },
});


export const Layout = () => {
  return (



    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
      <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Suspense fallback={null}>
        <Outlet />
        </Suspense>
        </ThemeProvider>
    </div>
  );
};
