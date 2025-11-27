import { ApolloProvider } from '@apollo/client/react';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.jsx';
import client from './apollo.js';
import Loader from './components/Loader.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense
      fallback={
        <>
          <Loader />
        </>
      }
    >
      <ApolloProvider client={client}>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <App className="selection:bg-pink-300" />
        </ErrorBoundary>
      </ApolloProvider>
    </Suspense>
  </StrictMode>,
);
