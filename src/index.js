import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Layout from './Components/Layout/Layout';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Error from './Components/Error/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DemandedList from './Components/DemandedList/DemandedList';
import Cart from './Components/Cart/Cart';


const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Layout />
      },
      {
        path: '/ContactUs',
        element: <Contact />
      },
      {
        path: '/AboutUs',
        element: <About />
      },
      {
        path: '/demandedList',
        element: <DemandedList />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  },
],
  {
    basename: '/ecommerce' 
  }
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRoutes} />
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
