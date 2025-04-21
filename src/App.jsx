import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./paginas/Home/Home.jsx"
import Login from "./paginas/Login/Login.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;