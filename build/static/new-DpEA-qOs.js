import{D as e,r as t,j as o,B as r,C as n,T as s,c as a,d as i,M as c}from"./index-BnhGmwnk.js";import{N as d}from"./NoteForm-B7ydFIhP.js";import{u as m}from"./createSvgIcon-TnKg1dvb.js";import"./vendor-_g6xLlVr.js";import"./TextField-BMM9qvp_.js";const l=c`
  mutation NewNote($content: String!) {
    newNote(content: $content) {
      id
      createdAt
      content
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
`;function u(){const c=e(),[u,{loading:j,error:f}]=m(l,{refetchQueries:[{query:a},{query:i}],onCompleted:e=>{console.log("New note created:",e),c(`/note/${e.newNote.id}`)},onError:e=>{console.error("Error creating new note:",e),c("/")}});return t.useEffect(()=>{document.title="New Note - OranNote"},[]),j?o.jsx(r,{display:"flex",justifyContent:"center",mt:4,children:o.jsx(n,{})}):f?(console.log(f),o.jsx(s,{color:"error",variant:"body1",children:f.message})):o.jsxs(r,{p:3,children:[o.jsx(s,{variant:"h4",gutterBottom:!0,className:"text-amber-500",children:"Create new Note"}),o.jsx(d,{action:u})]})}export{u as default};
