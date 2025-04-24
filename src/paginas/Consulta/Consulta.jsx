import ItemTabela from '../../componentes/ItemTabelaConsulta/ItemTabelaConsulta';
import Navegacao from '../../componentes/Navegacao';
import Rodape from '../../componentes/Rodape';
import './Consulta.css';

import { MdFilterListAlt } from "react-icons/md";
import { LuCircleUser } from "react-icons/lu";
import { IoRefreshOutline } from "react-icons/io5";

const Consulta = () => {
  return (
    <>
    <Navegacao />
    <div className='consulta-opcoes'>
      <div className="usuario">
        <LuCircleUser size={35} />
        <div className="usuario-texto">Bem-vindo, Doutor!</div>
      </div>
      <div className='usuario-filtro'>
        <MdFilterListAlt size={35} color='var(--azul-escuro)' cursor={'pointer'}/>
        <IoRefreshOutline size={35} color='var(--azul-escuro)' cursor={'pointer'}/>
        <select className='usuario-select'>
          <option className='usuario-opcao'>Todas as consultas</option>
          <option className='usuario-opcao'>Consultas agendadas</option>
          <option className='usuario-opcao'>Consultas passadas</option>
      </select>
      </div>
    </div>
    
    <h1 className='h1-tabela'>Todas as consultas</h1>
    <div className='container-tabela'>
        <div className='container-titulo-tabela'>
            <div className='titulo-tabela'>Nome do paciente</div>
            <div className='titulo-tabela'>Tipo de consulta</div>
            <div className='titulo-tabela'>Data</div>
            <div className='titulo-tabela'>Horário</div>           
        </div>
        <ItemTabela nome='Evandro' tipoConsulta='Check-up Rotina' data='25/04/2024' horario='7:00'/>
        <ItemTabela nome='Evandro' tipoConsulta='Check-up Rotina' data='25/04/2024' horario='7:00'/>

    </div>
    <Rodape />
    </>
  )
}

export default Consulta
