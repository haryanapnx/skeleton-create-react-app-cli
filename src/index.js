import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from "redux-thunk";

import smoothscroll from 'smoothscroll-polyfill';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import history from "commons/history";
import { Router, BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";

import reducer from "commons/routeReducers";
import storage from "redux-persist/lib/storage";
// import IndexRouter from "./routes/index";
// import DetectOffline from "./components/detectOffline";

import './index.css';
import Apps from './App';
import * as serviceWorker from './serviceWorker';
smoothscroll.polyfill();

const persistConfig = { key: "root", storage, whitelist: ['auth', 'staticStore', 'location'] };
const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
let persistor = persistStore(store);

const App = () => (
   <BrowserRouter>
       <React.Fragment>
           <Provider store={store}>
               <>
                   {/* <DetectOffline /> */}
                   <ToastContainer autoClose={8000} />
                   <PersistGate loading={null} persistor={persistor}>
                       {/* <Router history={history}>
                           <IndexRouter />
                       </Router> */}
                       <Apps />
                   </PersistGate>
               </>
           </Provider>
       </React.Fragment>
   </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
