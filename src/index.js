import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './Welcome';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
