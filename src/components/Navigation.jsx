import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { BookHeart, Home, Notebook } from 'lucide-react';
import { NavLink } from 'react-router';

const Navigation = ({ statusSidebar }) => {
  return (
    <Box sx={{ p: 2, pt: 8, maxWidth: 240 }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={NavLink}
            to="/"
            sx={{
              '&.active': { color: 'orange' },
            }}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            {statusSidebar && (
              <ListItemText primary="Home" sx={{ whiteSpace: 'nowrap' }} />
            )}
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={NavLink}
            to="/my_notes"
            sx={{
              '&.active': { color: 'orange' },
            }}
          >
            <ListItemIcon>
              <Notebook />
            </ListItemIcon>
            {statusSidebar && (
              <ListItemText primary="My Notes" sx={{ whiteSpace: 'nowrap' }} />
            )}
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={NavLink}
            to="/favorites"
            sx={{
              '&.active': { color: 'orange' },
            }}
          >
            <ListItemIcon>
              <BookHeart />
            </ListItemIcon>
            {statusSidebar && (
              <ListItemText primary="Favorites" sx={{ whiteSpace: 'nowrap' }} />
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export { Navigation };
