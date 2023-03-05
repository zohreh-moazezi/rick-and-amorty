import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';


const store = configureStore();
const persistor = persistStore (store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate
      loading = {<div>Loading ...</div>}
      persistor = {persistor} >
      <App />
    </PersistGate> 
  </Provider>,
);

reportWebVitals();
