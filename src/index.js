import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render(<ContactList />, document.getElementById('root'));
registerServiceWorker();

