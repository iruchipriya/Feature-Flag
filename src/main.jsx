import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import FFProvider from '../src/FeatureFlag';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FFProvider>
      <App />
    </FFProvider>
  </React.StrictMode>
);
