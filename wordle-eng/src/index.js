import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactModal from 'react-modal'

// redux start
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './components/reducers/root'

const enhancer =
    process.env.NODE_ENV === "production"
        ? compose(applyMiddleware())
        : composeWithDevTools(applyMiddleware(logger))
const store = createStore(rootReducer, enhancer)
// redux end

ReactModal.setAppElement('#root')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
