import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Header } from './Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
