import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { useParams } from 'react-router';
import Loader from '../components/Loader';
import Note from '../components/Note';

const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

function NotePage() {
  // Сохраняем id из url в виде переменной
  const { id } = useParams();
  // Запрашиваем хук, передавая значение id в качестве переменной
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  // Если данные загружаются, отображаем сообщение о загрузке
  if (loading) return <Loader />;
  // Если при получении данных произошел сбой, отображаем сообщение об ошибке
  if (error) return <p>Error! Note not found</p>;
  return <Note note={data.note} />;
}

export default NotePage;
