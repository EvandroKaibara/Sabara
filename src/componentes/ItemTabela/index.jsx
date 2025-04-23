import './ItemTabela.css';

const ItemTabela = ({ nome, tipoConsulta, data, horario }) => {
  return (
    <div className='container-linha'>
        <div className='linha-tabela linha-nome'>{nome}</div>
        <div className='linha-tabela linha-consulta'>{tipoConsulta}</div>
        <div className='linha-tabela linha-data'>{data}</div>
        <div className='linha-tabela linha-horario'>{horario}</div>
    </div>
  )
}

export default ItemTabela;
