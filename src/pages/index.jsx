import { Loader } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Layout from '../components/Layout';
const NotePage = lazy(() => import('./notes'));
const Home = lazy(() => import('./home'));
const MyNotes = lazy(() => import('./mynotes'));
const Favorites = lazy(() => import('./favorites'));
const SignUp = lazy(() => import('./signup'));
const SignIn = lazy(() => import('./signin'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/my_notes', element: <MyNotes /> },
      { path: '/favorites', element: <Favorites /> },
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
