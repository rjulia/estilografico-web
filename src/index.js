import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './router/routing';
import i18n from "./i18n/i18n";
import { I18nextProvider } from "react-i18next";
import { ServicesProvider } from './hooks'
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    <ServicesProvider>
      <Router />
    </ServicesProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
