import { useMutation } from '@apollo/client/react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { DELETE_NOTE } from '../gql/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';

const DeleteNote = ({ id }) => {
  const navigate = useNavigate();

  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: { id },
    refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
    onCompleted: (data) => {
      console.log('Note deleted', data);
      navigate('/my_notes');
    },
    onError: (err) => {
      console.error('Error deleting note:', err);
    },
  });

  return (
    <Button
      variant="outlined"
      color="error"
      onClick={(e) => {
        e.preventDefault();
        deleteNote();
      }}
      sx={{ mt: 2 }}
    >
      Delete Note
    </Button>
  );
};

export default DeleteNote;
