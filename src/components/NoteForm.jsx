import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

const NoteForm = (props) => {
  // Состояние формы
  const [value, setValue] = useState({ content: props.content || '' });

  // Обновляем состояние при вводе
  const onChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  // Сабмит формы
  const onSubmit = (e) => {
    e.preventDefault();
    props.action({
      variables: {
        ...value,
      },
    });
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TextField
        required
        multiline
        fullWidth
        name="content"
        placeholder="Note content"
        helperText="Please enter your content"
        value={value.content}
        onChange={onChange}
        sx={{ flexGrow: 1, mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
};

export default NoteForm;
