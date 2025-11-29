import { useQuery } from '@apollo/client/react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router';
import { GET_ME } from '../qql/query';
const NoteUser = (props) => {
  const { loading, error, data } = useQuery(GET_ME);
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
    <>
      {/* Favorites:{props.favoritesCount}{' '} */}
      {console.log(props)}
      {data.me.id === props.note.author.id ? (
        <Link
          to={`/edit/${props.note.id}`}
          className="text-blue-500 hover:underline"
        >
          Edit Note
        </Link>
      ) : null}
    </>
  );
};
export default NoteUser;
