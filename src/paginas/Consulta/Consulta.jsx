import ItemTabela from '../../componentes/ItemTabela';
import Navegacao from '../../componentes/Navegacao';
import Rodape from '../../componentes/Rodape';
import './Consulta.css';

const Consulta = () => {
  return (
    <>
    <Navegacao />
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
        <ItemTabela nome='Evandro' tipoConsulta='Check-up Rotina' data='25/04/2024' horario='7:00'/>
        <ItemTabela nome='Evandro' tipoConsulta='Check-up Rotina' data='25/04/2024' horario='7:00'/>
        <ItemTabela nome='Evandro' tipoConsulta='Check-up Rotina' data='25/04/2024' horario='7:00'/>
        <ItemTabela nome='Evandro' tipoConsulta='Check-up Rotina' data='25/04/2024' horario='7:00'/>
        <ItemTabela nome='Evandro' tipoConsulta='Check-up Rotina' data='25/04/2024' horario='7:00'/>
        <ItemTabela nome='Evandro' tipoConsulta='Check-up Rotina' data='25/04/2024' horario='7:00'/>
        <ItemTabela nome='Evandro' tipoConsulta='Check-up Rotina' data='25/04/2024' horario='7:00'/>
        <ItemTabela nome='Evandro' tipoConsulta='Check-up Rotina' data='25/04/2024' horario='7:00'/>
        <ItemTabela nome='Evandro' tipoConsulta='Check-up Rotina' data='25/04/2024' horario='7:00'/>

    </div>
    <Rodape />
    </>
  )
}

export default Consulta
