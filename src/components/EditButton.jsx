import { Button } from '@mui/material';
import { Link } from 'react-router';

function EditButton({ note }) {
  return (
    <Button
      component={Link}
      to={`/edit/${note.id}`}
      variant="outlined"
      color="warning"
      sx={{ mt: 2 }}
    >
      Edit Note
    </Button>
  );
}

export default EditButton;
