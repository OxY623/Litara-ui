import { Link } from 'react-router';
import Note from './Note';

function NoteFeed(props) {
  const { data_notes } = props;
  const components = data_notes.map((note) => (
    <div key={note.id}>
      <Link to={`note/${note.id}`}>
        <Note key={note.id} note={note} />
      </Link>
    </div>
  ));

  return <div className="p-2.5 flex flex-col gap-2.5">{components}</div>;
}

export default NoteFeed;
