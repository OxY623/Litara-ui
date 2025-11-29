import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client/react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import NoteForm from '../components/NoteForm';
import { GET_MY_NOTES, GET_NOTES } from '../qql/query';

const NEW_NOTE = gql`
  mutation NewNote($content: String!) {
    newNote(content: $content) {
      id
      createdAt
      content
      favoriteCount
      favoritesBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;

function NewNote() {
  const navigate = useNavigate();
  const [funMutation, { loading, error }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
    onCompleted: (data) => {
      console.log('New note created:', data);
      // Можно добавить перенаправление или очистку формы здесь
      navigate(`/note/${data.newNote.id}`);
    },
    onError: (err) => {
      console.error('Error creating new note:', err);
      navigate('/');
    },
  });
  useEffect(() => {
    document.title = 'New Note - OranNote';
  }, []);
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    console.log(error);
    return (
      <Typography color="error" variant="body1">
        {error.message}
      </Typography>
    );
  }
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom className="text-amber-500">
        Create new Note
      </Typography>
      <NoteForm action={funMutation} />
    </Box>
  );
}

export default NewNote;
