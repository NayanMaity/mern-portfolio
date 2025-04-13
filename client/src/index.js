import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import './styles/media.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css/animate.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
