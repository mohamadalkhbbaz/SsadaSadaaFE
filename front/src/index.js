import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query'; // Correct import statement
import './index.css';
import App from './App';

const queryClient = new QueryClient(); // Create a new instance of QueryClient

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>  
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
