import { useQuery } from '@apollo/client/react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import Markdown from 'react-markdown';
import { IS_LOGGED_IN } from '../qql/query';
import NoteUser from './NoteUser';

function Note({ note }) {
  const { data, loading, error } = useQuery(IS_LOGGED_IN);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    console.error(error);
    return (
      <Typography color="error" variant="body1">
        {error.message}
      </Typography>
    );
  }

  const formattedDate = format(new Date(note.createdAt), 'MMM do yyyy');

  return (
    <Card
      key={note.id}
      sx={{
        maxWidth: 768,
        mx: 'auto',
        my: 2,
        border: 1,
        borderColor: 'warning.main',
        borderRadius: 3,
        p: 2,
      }}
    >
      <CardHeader
        avatar={<Avatar src={note.author.avatar} alt={note.author.name} />}
        title={note.author.username}
        titleTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }}
        subheader={
          <Typography variant="body2" color="text.secondary">
            created: <time dateTime={note.createdAt}>{formattedDate}</time>
          </Typography>
        }
      />

      <CardContent>
        <Box mb={2}>
          <Markdown>{note.content}</Markdown>
        </Box>
        {data.isLoggedIn ? <NoteUser note={note} /> : null}
        <Typography variant="body2">❤️ {note.favoriteCount}</Typography>
      </CardContent>
    </Card>
  );
}

export default Note;
