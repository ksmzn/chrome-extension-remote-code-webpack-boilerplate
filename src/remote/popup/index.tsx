import '../assets/reset.css';
import '../assets/popup.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
  ReactDOM.render(
    <App />,
    document.getElementById('container')
  );
});
