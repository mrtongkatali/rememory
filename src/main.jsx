// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@/scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Strict mode invoking twice on development
  // https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
