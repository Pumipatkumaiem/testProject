import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Product from './components/Product';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import Book from './Book';

const router = createBrowserRouter([ //ตัว function สร้าง ลิ้งค์ไปหน้าอื่น
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Product',
    element: <Product />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Book',
    element: <Book />
  }
 

]);
const root = ReactDOM.createRoot(document.getElementById("root")); //ตัว function สร้าง ลิ้งค์ไปหน้าอื่น
root.render(<RouterProvider router={router} />); 
    

reportWebVitals();
