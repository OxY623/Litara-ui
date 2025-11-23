import Loader from '../components/Loader';
import { Button } from '../components/Button';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
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
  }
`;

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES, {
    variables: { cursor: '' },
    fetchPolicy: 'network-only', // игнорируем старый кеш
  });

  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h1>Notedly</h1>
      {data.noteFeed.notes.map((note) => (
        <div key={note.id} className="note-card">
          <p>
            <strong>{note.author.username}</strong>:
          </p>
          <p>{note.content}</p>
          <p>❤️ {note.favoriteCount}</p>
        </div>
      ))}
      {data.noteFeed.hasNextPage && (
        <Button
          onClick={() =>
            fetchMore({
              variables: { cursor: data.noteFeed.cursor },
            })
          }
        >
          Load more
        </Button>
      )}
    </div>
  );
};

export default Home;
