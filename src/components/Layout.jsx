import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Header } from './Header';

function Layout() {
  return (
    <>
      <Header />

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className="
            hidden lg:flex
            w-[260px]
            flex-col
            border-r border-gray-200
            bg-white
            p-4
          "
        >
          <Navigation />
        </aside>

        {/* Mobile nav */}
        <div className="lg:hidden w-full border-b border-gray-200 bg-white p-3">
          <Navigation />
        </div>

        {/* Main content */}
        <main
          className="
            flex-1 
            p-4 
            lg:p-8 
            bg-gray-50
          "
        >
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
