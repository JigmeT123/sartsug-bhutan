import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../src/store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase';
import {getFirestore} from 'redux-firestore';
import fbconfig from './firebase';
import { reduxFirestore,} from 'redux-firestore';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reactReduxFirebase(fbconfig),
  reduxFirestore(fbconfig),
));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById(
        'root'
    )
);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals