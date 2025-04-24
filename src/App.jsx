import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./paginas/Home/Home.jsx"
import Login from "./paginas/Login/Login.jsx";
import NotFound from "./paginas/NotFound/NotFound.jsx";
import Consulta from './paginas/Consulta/Consulta.jsx';
import Internacao from './paginas/Internacao/Internacao.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/consulta' element={<Consulta/>} />
          <Route path='/internacao' element={<Internacao/>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;