import ItemTabelaInternacao from '../../componentes/ItemTabelaInternacao/ItemTabelaInternacao';
import Navegacao from '../../componentes/Navegacao';
import Rodape from '../../componentes/Rodape';
import './Internacao.css';

import { MdFilterListAlt } from "react-icons/md";
import { LuCircleUser } from "react-icons/lu";
import { IoRefreshOutline } from "react-icons/io5";

const Internacao = () => {
  return (
    <>
    <Navegacao />
    <div className='internacao-opcoes'>
      <div className="usuario">
        <LuCircleUser size={35} />
        <div className="usuario-texto">Bem-vindo, Doutor!</div>
      </div>
      <div className='usuario-filtro'>
        <MdFilterListAlt size={35} color='var(--azul-escuro)' cursor={'pointer'}/>
        <IoRefreshOutline size={35} color='var(--azul-escuro)' cursor={'pointer'}/>
        <select className='usuario-select'>
          <option className='usuario-opcao'>Todos os pacientes</option>
          <option className='usuario-opcao'>Pacientes ativos</option>
          <option className='usuario-opcao'>Passientes liberados</option>
      </select>
      </div>
    </div>
    
    <h1 className='h1-tabela'>Todos os pacientes</h1>
    <div className='container-tabela'>
        <div className='container-titulo-tabela'>
            <div className='titulo-tabela'>Nome do paciente</div>
            <div className='titulo-tabela'>Detalhes do paciente</div>
            <div className='titulo-tabela'>Última atualização</div>
            <div className='titulo-tabela'>Estado</div>           
        </div>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>
        <ItemTabelaInternacao nome='Evandro' atualizacao='01/04/2025 às 09:00' estado='Liberado'/>

    </div>
    <Rodape />
    </>
  )
}

export default Internacao
