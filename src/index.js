
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
   
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/register' element= {<Register/>}></Route>
      <Route path='/login' element= {<Login/>}></Route>
      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();