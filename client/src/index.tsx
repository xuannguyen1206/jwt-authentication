import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Login from './routes/login';
import Signup from './routes/signup';
import AuthorizationTest from './routes/authorizationTest';
import Username from './routes/username';

ReactDOM.render(
  <BrowserRouter>  
    <Routes>
      <Route path='/' element={<App/>}> </Route>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='username/:usernameId' element={<Username/>}/>
      <Route path='authorizationTest' element={<AuthorizationTest/>}/>
    </Routes> 
  </BrowserRouter> 
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
