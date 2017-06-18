import React from 'react';
import ReactDOM from 'react-dom';
// import Contact from './App';
import ContactList from './ContactList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<ContactList />, document.getElementById('root'));
registerServiceWorker();

