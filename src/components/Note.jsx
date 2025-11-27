import { format } from 'date-fns';
import Markdown from 'react-markdown';

function Note(props) {
  const { note } = props;

  // @ts-check
  // let s = "";
  // s=123;

  return (
    <article
      key={note.id}
      className="max-w-3xl min-w-1/2 my-0 mx-auto py-2.5 px-5 border rounded-2xl border-amber-600"
    >
      <div className="flex flex-row gap-2.5 py-2">
        <img
          src={note.author.avatar}
          className="size-12 rounded-full"
          alt={'Avatar of' + note.author.name}
        ></img>{' '}
        <p className="">
          <strong>{note.author.username}</strong>
          <br />
          created:{' '}
          <time dateTime={note.createdAt}>
            {format(new Date(note.createdAt), 'MMM do yyyy')}
          </time>
        </p>
      </div>

      <div className="py-2">
        <Markdown>{note.content}</Markdown>
      </div>

      <div className="py-2">
        <p>❤️ {note.favoriteCount}</p>
      </div>
    </article>
  );
}

export default Note;
