import { gql, useQuery } from '@apollo/client';

const GET_NOTES = gql`
  query GetNotes {
    notes {
      id
      content
      author {
        username
      }
    }
  }
`;

export default function Notes() {
  const { loading, error, data } = useQuery(GET_NOTES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {data.notes.map((note) => (
          <li key={note.id}>
            <strong>{note.author.username}:</strong> {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
