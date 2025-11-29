import{M as t}from"./index-BnhGmwnk.js";const e=t`
  mutation updateNote($id: ID!, $content: String!) {
    updateNote(id: $id, content: $content) {
      id
      content
      createdAt
      favoriteCount
      favoritesBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`,o=t`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`,i=t`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
      favoriteCount
    }
  }
`;export{o as D,e as E,i as T};
