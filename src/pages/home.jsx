import { useQuery } from '@apollo/client/react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import NoteFeed from '../components/NoteFeed';
import { GET_NOTES } from '../gql/query';

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

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
        All Notes
      </Typography>

      <NoteFeed data_notes={data.noteFeed.notes} />

      {data.noteFeed.hasNextPage && (
        <Box mt={3} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            className="bg-amber-500 hover:bg-amber-600 text-black"
            onClick={() =>
              fetchMore({
                variables: { cursor: data.noteFeed.cursor },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) return prev;

                  const newFeed = fetchMoreResult.noteFeed;

                  return {
                    noteFeed: {
                      cursor: newFeed.cursor,
                      hasNextPage: newFeed.hasNextPage,
                      notes: [...prev.noteFeed.notes, ...newFeed.notes],
                      __typename: prev.noteFeed.__typename,
                    },
                  };
                },
              })
            }
          >
            Load more
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Home;
