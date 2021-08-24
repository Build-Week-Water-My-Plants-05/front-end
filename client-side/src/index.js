import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { BrowserRouter } from "react-router-dom";

//Wrapping our app in the browser router
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

