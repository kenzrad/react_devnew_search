import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { persistor, store } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import * as serviceWorker from './serviceWorker';

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

  console.log(store.getState());
  
};

renderApp();

serviceWorker.unregister();
