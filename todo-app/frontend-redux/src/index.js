import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// middleware's
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import './index.css';
import App from './main/App';
import reducers from './main/reducers'
import registerServiceWorker from './registerServiceWorker';

// debugger no chrome (não necessario em prod)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
