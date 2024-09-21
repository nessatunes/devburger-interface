import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import GlobalStyles from './styles/globalStyles';
import AppProvider from './hooks';
import Header from './components/Header';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Header />
      <RouterProvider router={router} />
      <GlobalStyles />
      <ToastContainer autoClose={3000} theme="colored" />
    </AppProvider>
  </StrictMode>,
);
