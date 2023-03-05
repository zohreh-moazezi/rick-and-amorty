import {createStore , combineReducers , applyMiddleware} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {composeWithDevTools} from 'redux-devtools-extension';
import {items} from './component/reducers';


const reducers = { 
    items,
};

const persistConfig = {
    key : 'root',
    storage,
    stateReconciler : autoMergeLevel2,
}

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig , rootReducer);

export const configureStore = () => 
createStore(
    persistedReducer ,
    composeWithDevTools(
        applyMiddleware()
    ) 
);
