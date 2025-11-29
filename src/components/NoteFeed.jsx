import { Box, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import Note from './Note';

function NoteFeed({ data_notes }) {
  if (!data_notes || data_notes.length === 0) {
    return <Typography variant="h6">No notes to display</Typography>;
  }
  return (
    <Box sx={{ p: 2.5 }}>
      <Stack spacing={2.5}>
        {data_notes.map((note) => (
          <Link
            key={note.id}
            component={RouterLink}
            to={`note/${note.id}`}
            underline="none"
            sx={{ display: 'block' }}
          >
            <Note note={note} />
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

export default NoteFeed;
