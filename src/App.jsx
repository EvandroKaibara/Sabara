import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./paginas/Home/Home.jsx"
import Login from "./paginas/Login/Login.jsx";
import NotFound from "./paginas/NotFound/NotFound.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;