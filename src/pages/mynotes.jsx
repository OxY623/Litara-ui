import { useQuery } from '@apollo/client/react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect } from 'react';
import NoteFeed from '../components/NoteFeed';
import { GET_MY_NOTES } from '../gql/query';

const MyNotes = () => {
  useEffect(() => {
    document.title = 'My Notes — OranNote';
  });

  const { data, loading, error } = useQuery(GET_MY_NOTES);

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

  if (data.me.notes.length === 0) {
    return (
      <Typography variant="h6">You have not created any notes yet!</Typography>
    );
  }

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom className="text-amber-500">
        My Notes
      </Typography>
      <NoteFeed data_notes={data.me.notes} />
    </Box>
  );
};

export default MyNotes;
