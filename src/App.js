import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homapage/Homepage.js';
import Blog from './components/Blog/Blog.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header.js';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<Login/>}/> 
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='header' element={<Header/>}/>
   </Routes>
   </BrowserRouter>  
  );
}

export default App;
