import authReducer from './authReducer';
import mapReducer from './mapReducer';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    map: mapReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;