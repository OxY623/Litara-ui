import { useQuery } from '@apollo/client/react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { GET_ME } from '../gql/query';
import DeleteNote from './DeleteNote';
import EditButton from './EditButton';
import FavoriteNote from './FavoriteNote';
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
        <Box display={'flex'} alignItems="center" gap={1} mt={2}>
          <EditButton note={props.note} />
          <DeleteNote id={props.note.id} />
          <FavoriteNote
            favoriteCount={props.note.favoriteCount}
            me={data.me}
            noteId={props.note.id}
          />
        </Box>
      ) : (
        <Box display={'flex'} alignItems="center" gap={1} mt={2}>
          <FavoriteNote
            favoriteCount={props.note.favoriteCount}
            me={data.me}
            noteId={props.note.id}
          />
        </Box>
      )}
    </>
  );
};
export default NoteUser;
