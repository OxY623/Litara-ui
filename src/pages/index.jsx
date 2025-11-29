import { useQuery } from '@apollo/client/react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Loader } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { IS_LOGGED_IN } from '../apollo.js';
import Layout from '../components/Layout';
const NotePage = lazy(() => import('./notes'));
const Home = lazy(() => import('./home'));
const MyNotes = lazy(() => import('./mynotes'));
const Favorites = lazy(() => import('./favorites'));
const SignUp = lazy(() => import('./signup'));
const SignIn = lazy(() => import('./signin'));

export const PrivateRoute = ({ children }) => {
  const { data, loading, error } = useQuery(IS_LOGGED_IN);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    console.log(error);
    return (
      <Typography color="error" variant="body1">
        {error.message}
      </Typography>
    );
  }

  return data?.isLoggedIn ? children : <Navigate to="/signin" replace />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/signin', element: <SignIn /> },
      {
        path: '/my_notes',
        element: (
          <PrivateRoute>
            <MyNotes />
          </PrivateRoute>
        ),
      },
      {
        path: '/favorites',
        element: (
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
      },
      { path: '/note/:id', element: <NotePage /> },
      { path: '*', element: <Home /> },
    ],
  },
]);

export default function Pages() {
  return (
    <Suspense
      fallback={
        <>
          <Loader />
        </>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}
