import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { Button } from '../components/Button';
import Loader from '../components/Loader';
import NoteFeed from '../components/NoteFeed';

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
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return <p className="text-red-600">{error.message}</p>;
  }

  return (
    <div>
      <h1>All Notes</h1>
      <br></br>
      <NoteFeed data_notes={data.noteFeed.notes} />
      {data.noteFeed.hasNextPage && (
        <Button
          name="Load more"
          handleClick={() =>
            fetchMore({
              variables: { cursor: data.noteFeed.cursor },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;

                const newFeed = fetchMoreResult.noteFeed;

                return {
                  noteFeed: {
                    cursor: newFeed.cursor,
                    hasNextPage: newFeed.hasNextPage,
                    notes: [...prev.noteFeed.notes, ...newFeed.notes],
                    __typename: prev.noteFeed.__typename,
                  },
                };
              },
            })
          }
        ></Button>
      )}
    </div>
  );
};

export default Home;
