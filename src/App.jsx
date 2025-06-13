import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./paginas/Home/Home.jsx"
import Login from "./paginas/Login/Login.jsx";
import NotFound from "./paginas/NotFound/NotFound.jsx";
import Consulta from './paginas/Consulta/Consulta.jsx';
import Internacao from './paginas/Internacao/Internacao.jsx';
import Secretaria from './paginas/Secretaria/Secretaria.jsx';
import Dashboard from './paginas/DashBoard/Dashboard.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/secretaria' element={<Secretaria />} />
          <Route path='/consulta' element={<Consulta/>} />
          <Route path='/internacao' element={<Internacao/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;