import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import client from './apollo.js';
import { ApolloProvider } from '@apollo/client/react';
import { ErrorBoundary } from 'react-error-boundary';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <ApolloProvider client={client}>
        <App className="selection:bg-pink-300" />
      </ApolloProvider>
    </ErrorBoundary>
  </StrictMode>,
);
