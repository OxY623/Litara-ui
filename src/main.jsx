import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import client from './apollo.js';
// import { ApolloProvider } from '@apollo/client';
import { ErrorBoundary } from 'react-error-boundary';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ApolloProvider client={client}> */}
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <App />
    </ErrorBoundary>
    {/* </ApolloProvider> */}
  </StrictMode>,
);
