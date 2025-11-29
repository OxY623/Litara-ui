import { useQuery } from '@apollo/client/react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Loader } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Layout from '../components/Layout';
import { IS_LOGGED_IN } from '../qql/query';
const NotePage = lazy(() => import('./notes'));
const Home = lazy(() => import('./home'));
const MyNotes = lazy(() => import('./mynotes'));
const Favorites = lazy(() => import('./favorites'));
const SignUp = lazy(() => import('./signup'));
const SignIn = lazy(() => import('./signin'));
const NewNote = lazy(() => import('./new'));
const EditNote = lazy(() => import('./edit'));
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
        path: '/new',
        element: (
          <PrivateRoute>
            <NewNote />
          </PrivateRoute>
        ),
      },
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
      {
        path: '/edit/:id',
        element: (
          <PrivateRoute>
            <EditNote />
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
