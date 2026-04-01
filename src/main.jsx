import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { DestinationsProvider } from './context/DestinationsContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <DestinationsProvider>
          <App />
        </DestinationsProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);