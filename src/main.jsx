import { StrictMode } from 'react'
import * as ReactDOM from "react-dom/client";
import * as React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import {store} from './redux/Store.jsx'
import './index.css'
import App from './App.jsx'
import ErrorPage from './Pages/ErrorPage.jsx';
import Contact from './routes/contact.jsx';
import Hero from './Components/Hero.jsx';
// import ProductProvider from './Context/ProductContext.jsx';



createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>  
  <Provider   store ={store}>
  


    <App />
   
   

  </Provider>
  </React.StrictMode>
);
