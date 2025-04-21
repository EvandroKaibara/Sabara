import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./paginas/Home/index.jsx"
import Login from "./paginas/Login/index.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;