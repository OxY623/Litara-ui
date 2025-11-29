import { useMutation, useQuery } from '@apollo/client/react';
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import Loader from '../components/Loader';
import NoteForm from '../components/NoteForm';
import { EDIT_NOTE } from '../gql/mutation';
import { GET_ME, GET_NOTE } from '../gql/query';

function EditNote() {
  // Сохраняем id из url в виде переменной
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: userData } = useQuery(GET_ME);
  // Запрашиваем хук, передавая значение id в качестве переменной
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  const [editNote] = useMutation(EDIT_NOTE, {
    variables: { id: id },
    onCompleted: (data) => {
      console.log('Note edited:', data);
      navigate(`/note/${id}`);
    },
    onError: (err) => {
      console.error('Error editing note:', err);
    },
  });

  // Если данные загружаются, отображаем сообщение о загрузке
  if (loading) return <Loader />;
  // Если при получении данных произошел сбой, отображаем сообщение об ошибке
  if (error) return <p>Error! Note not found</p>;
  if (userData.me.id !== data.note.author.id) {
    return (
      <p>
        {console.log(userData.me.id, '   ', data.note.author.id)}You are not
        authorized to edit this note.
      </p>
    );
  }
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom className="text-amber-500">
        Edit Note
      </Typography>
      <NoteForm content={data.note.content} action={editNote} />
    </Box>
  );
}

export default EditNote;
