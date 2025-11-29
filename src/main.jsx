import { ApolloProvider } from '@apollo/client/react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { StyledEngineProvider } from '@mui/material/styles';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import client from './apollo.js';
import App from './App.jsx';
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
      <StyledEngineProvider enableCssLayer>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <ApolloProvider client={client}>
          <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <CssBaseline />
            <App className="selection:bg-pink-300" />
          </ErrorBoundary>
        </ApolloProvider>
      </StyledEngineProvider>
    </Suspense>
  </StrictMode>,
);
