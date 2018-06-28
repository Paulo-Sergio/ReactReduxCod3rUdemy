import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

import './index.css';
import App from './main/App';
import reducers from './main/reducers'
import registerServiceWorker from './registerServiceWorker';

const store = applyMiddleware(promise)(createStore)(reducers)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
