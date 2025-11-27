import { Loader } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Layout from '../components/Layout';
const NotePage = lazy(() => import('./notes'));
const Home = lazy(() => import('./home'));
const MyNotes = lazy(() => import('./mynotes'));
const Favorites = lazy(() => import('./favorites'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/my_notes', element: <MyNotes /> },
      { path: '/favorites', element: <Favorites /> },
      { path: '/note/:id', element: <NotePage /> },
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
