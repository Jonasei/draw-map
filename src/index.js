import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initializeFirebase from './initializeFirebase'
import './index.css';

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


initializeFirebase()

const showLoginScreen = (state = 'SHOW_LOGIN', action) => {
	switch (action.type) {
		case 'SHOW_CONTENT':
			return false
		default:
			return true
	}
}

let store = createStore(showLoginScreen)


render(
	<Provider>
		<App />
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
