import ItemTabela from '../../componentes/ItemTabelaSecretaria/ItemTabelaSecretaria';
import Navegacao from '../../componentes/Navegacao';
import Rodape from '../../componentes/Rodape';
import './Secretaria.css';

import { MdFilterListAlt } from "react-icons/md";
import { LuCircleUser } from "react-icons/lu";
import { IoRefreshOutline } from "react-icons/io5";

const Secretaria = () => {
  return (
    <>
    <Navegacao />
    <div className='consulta-opcoes'>
      <div className="usuario">
        <LuCircleUser size={35} />
        <div className="usuario-texto">Bem-vindo!</div>
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
        
        <ItemTabela nome='Evandro' tipoConsulta='Check-up Rotina' data='25/04/2024' horario='7:00' />
        <ItemTabela nome='Maria' tipoConsulta='Análise de exame' data='25/04/2024' horario='9:00' />
        <ItemTabela nome='João' tipoConsulta='Raio-X' data='25/04/2024' horario='10:00' />
        <ItemTabela nome='Juliana' tipoConsulta='Check-up Rotina' data='26/04/2024' horario='09:30'/>
        <ItemTabela nome='Carlos' tipoConsulta='Análise de exame' data='26/04/2024' horario='10:00'/>
        <ItemTabela nome='Fernanda' tipoConsulta='Raio-X' data='26/04/2024' horario='11:15'/>
        <ItemTabela nome='Roberto' tipoConsulta='Check-up Rotina' data='27/04/2024' horario='08:00'/>
        <ItemTabela nome='Luciana' tipoConsulta='Raio-X' data='27/04/2024' horario='13:00'/>
        <ItemTabela nome='Amanda' tipoConsulta='Análise de exame' data='27/04/2024' horario='15:45'/>
        <ItemTabela nome='Marcelo' tipoConsulta='Check-up Rotina' data='28/04/2024' horario='07:45'/>
        <ItemTabela nome='Bianca' tipoConsulta='Análise de exame' data='28/04/2024' horario='12:30'/>
        <ItemTabela nome='Patrícia' tipoConsulta='Raio-X' data='29/04/2024' horario='16:20'/>
        <ItemTabela nome='Gabriel' tipoConsulta='Check-up Rotina' data='30/04/2024' horario='09:00'/>


    </div>
    <Rodape />
    </>
  )
}

export default Secretaria
