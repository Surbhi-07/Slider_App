import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from "./store";
import {Provider} from "react-redux"
import App from './App';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render
root.render(<Provider store={store}><App /></Provider>);