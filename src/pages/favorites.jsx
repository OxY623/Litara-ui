import { useQuery } from '@apollo/client/react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect } from 'react';
import NoteFeed from '../components/NoteFeed';
import { GET_MY_FAVORITES } from '../qql/query';

const Favorites = () => {
  const { data, loading, error } = useQuery(GET_MY_FAVORITES);
  useEffect(() => {
    // Обновляем заголовок документа
    document.title = 'Favorites — OraNote';
  });
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
  if (data.me.favorites.length === 0) {
    return <Typography variant="h6">No favorites yet</Typography>;
  }

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom className="text-amber-500">
        My Favorites
      </Typography>
      <NoteFeed data_notes={data.me.favorites} />
    </Box>
  );
};

export default Favorites;
