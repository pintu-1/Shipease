import React from 'react';
import { createRoot } from 'react-dom/client';
import store from './redux/store';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter as Router  } from "react-router-dom";
import { Suspense } from 'react';
import Loading from './Component/loader';
import App from './App';
import './index.css';


createRoot(document.getElementById('root')).render(
  <>
    {/* <Suspense fallback={<Loading/>}> */}
    <Provider store={store}>
      <Router basename='/admin'>
        <App />
      </Router>
    </Provider>
    {/* </Suspense> */}
  </>,
  document.getElementById('root')
);

