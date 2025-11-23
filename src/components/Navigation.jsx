import { BookHeart, Home, Linkedin, Notebook } from 'lucide-react';
import { NavLink } from 'react-router';
import Favorites from '../pages/favorites';

const Navigation = () => {
  return (
    <nav className="p-4 pt-16 min-w-1/4 md:fixed md:w-3xs  md:h-[calc(100%-24px)] md:overflow-y-scroll">
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink
            title="Home"
            className="hover:underline hover:underline-offset-2 hover:text-orange-500 flex gap-1 items-center"
            to="/"
          >
            <Home className="shrink-0" />{' '}
            <span className="hidden sm:inline">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:underline hover:underline-offset-2 hover:text-orange-500 flex gap-1 items-center"
            to="/my_notes"
            title="My Notes"
          >
            <Notebook className="shrink-0" />
            <span className="hidden sm:inline">My Notes</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            title="Favorites"
            className="hover:underline hover:underline-offset-2 hover:text-orange-500 flex gap-1 items-center"
            to="/favorites"
          >
            <BookHeart className="shrink-0" />
            <span className="hidden sm:inline">Favorites</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
