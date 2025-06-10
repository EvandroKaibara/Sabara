import './ItemTabelaConsulta.css';

const ItemTabela = ({ nome, tipoConsulta, data, horario }) => {
  const getTipoConsultaClass = (tipo) => {
    switch (tipo) {
      case 'Check-up Rotina':
        return 'consulta-checkup';
      case 'Análise de exame':
        return 'consulta-exame';
      case 'Raio-X':
        return 'consulta-raiox';
      default:
        return '';
    }
  };

  return (
    <div className='container-linha'>
      <div className='linha-tabela linha-nome'>{nome}</div>
      <div className={`linha-tabela linha-consulta ${getTipoConsultaClass(tipoConsulta)}`}>
        {tipoConsulta}
      </div>
      <div className='linha-tabela linha-data'>{data}</div>
      <div className='linha-tabela linha-horario'>{horario}</div>
    </div>
  );
};

export default ItemTabela;
