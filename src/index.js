import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../src/store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase';
import fbconfig from './firebase';
import {createFirestoreInstance, reduxFirestore} from 'redux-firestore';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument(getFirebase)),
  reduxFirestore(fbconfig)
));

const rrfProps = {
  firebase,
  config: fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
          <ReactReduxFirebaseProvider
          {... rrfProps}
          >
            <App/>
          </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById(
        'root'
    )
);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals