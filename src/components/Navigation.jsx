import { BookHeart, Home, Notebook } from 'lucide-react';
import { NavLink } from 'react-router';

const Navigation = (props) => {
  const { statusSidebar } = props;
  return (
    <nav className="p-4 pt-16  md:max-w-3xs">
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink
            title="Home"
            className="hover:underline hover:underline-offset-2 hover:text-orange-500 flex gap-1 items-center"
            to="/"
          >
            <Home className="shrink-0" />{' '}
            <span
              className={`hidden text-nowrap ${!statusSidebar ? 'sm:hidden' : 'sm:inline'}`}
            >
              Home
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:underline hover:underline-offset-2 hover:text-orange-500 flex gap-1 items-center"
            to="/my_notes"
            title="My Notes"
          >
            <Notebook className="shrink-0" />
            <span
              className={`hidden text-nowrap ${!statusSidebar ? 'sm:hidden' : 'sm:inline'}`}
            >
              My Notes
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            title="Favorites"
            className="hover:underline hover:underline-offset-2 hover:text-orange-500 flex gap-1 items-center"
            to="/favorites"
          >
            <BookHeart className="shrink-0" />
            <span
              className={`hidden text-nowrap ${!statusSidebar ? 'sm:hidden' : 'sm:inline'}`}
            >
              Favorites
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
