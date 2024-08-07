import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '/src/styles/globals.css' // Adjust the path as needed


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
