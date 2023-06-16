import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter ,Route ,Link,NavLink,Swtich, Routes, Outlet, } from 'react-router-dom';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Academic from './Academic';
import Project from './Project';
import Feedback from './Feedback';




function Routing() {
  return<>
  <BrowserRouter>
 <Routes>
  
    
      <Route  path='/' element={<Home />} />
  
      <Route  path='/Academic' element={<Academic />} />
      <Route  path='/Project' element={< Project />} />
      <Route  path='/feedback' element={<Feedback />} />
    
    
  

  </Routes>
  <Outlet />
 
 </BrowserRouter>
 <Outlet />
 </>


};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing/>);
 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
