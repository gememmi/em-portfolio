import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <Router>
        <App />
    </Router>    
);

