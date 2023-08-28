
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/authorithation/operations';
import { useAuth } from 'hooks/useAuth';

const Home = lazy(() => import('../pages/Home'));
const SignUp = lazy(() => import('../pages/Signup'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));


export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


    return isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (

<Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
          }
        />
          <Route
            path="/login"
            element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
    );

};
