import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Header } from './Header';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-[260px] flex-col border-r border-gray-200 bg-white p-4">
          <Navigation />
        </aside>

        {/* Mobile nav */}
        <div className="lg:hidden w-1/4 sm:w1/3 border-b border-gray-200 bg-white p-3 shrink-0">
          <Navigation />
        </div>

        {/* Main */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
