import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import Markdown from 'react-markdown';

function Note({ note }) {
  return (
    <Card
      key={note.id}
      sx={{
        maxWidth: '768px',
        margin: '20px auto',
        border: '1px solid',
        borderColor: 'warning.main',
        borderRadius: 3,
        p: 2,
      }}
    >
      <CardHeader
        avatar={<Avatar src={note.author.avatar} alt={note.author.name} />}
        title={
          <Typography variant="subtitle1" fontWeight="bold">
            {note.author.username}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary">
            created:{' '}
            <time dateTime={note.createdAt}>
              {format(new Date(note.createdAt), 'MMM do yyyy')}
            </time>
          </Typography>
        }
      />

      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Markdown>{note.content}</Markdown>
        </Box>

        <Typography variant="body2">❤️ {note.favoriteCount}</Typography>
      </CardContent>
    </Card>
  );
}

export default Note;
