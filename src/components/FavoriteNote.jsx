import { useMutation } from '@apollo/client/react';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { TOGGLE_FAVORITE } from '../gql/mutation';
import { GET_MY_FAVORITES } from '../gql/query';

const FavoriteNote = ({ favoriteCount, me, noteId }) => {
  // Состояние количества избранных
  const [count, setCount] = useState(favoriteCount);

  // Проверяем, есть ли заметка в избранных
  const [favorited, setFavorited] = useState(
    me.favorites.some((note) => note.id === noteId),
  );

  // Хук мутации toggleFavorite
  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: { id: noteId },
    refetchQueries: [{ query: GET_MY_FAVORITES }],
    onError: (err) => console.error('Ошибка при изменении избранного:', err),
  });

  // Обработчик клика
  const handleToggle = (e) => {
    e.preventDefault();
    toggleFavorite();
    setFavorited(!favorited);
    setCount(favorited ? count - 1 : count + 1);
  };

  return (
    <Box display="flex" alignItems="center" gap={2} mt={2}>
      <Button
        variant={favorited ? 'contained' : 'outlined'}
        color={favorited ? 'error' : 'primary'}
        onClick={handleToggle}
      >
        {favorited ? 'Remove Favorite' : 'Add Favorite'}
      </Button>
      <Typography variant="body2">❤️ {count}</Typography>
    </Box>
  );
};

export default FavoriteNote;
