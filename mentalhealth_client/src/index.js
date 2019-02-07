import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';



const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
	);

const app = <Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</Provider>

 ReactDOM.render(app, document.getElementById('root'));










