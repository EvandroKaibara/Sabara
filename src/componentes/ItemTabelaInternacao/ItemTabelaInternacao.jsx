import './ItemTabelaInternacao.css';
import { Toaster, toast } from 'sonner';

const ItemTabela = ({ nome, atualizacao, estado }) => {
  const getEstadoStyle = (estado) => {
    switch (estado) {
      case 'Liberado':
        return { backgroundColor: '#2E86C1' };
      case 'Estável':
        return { backgroundColor: '#77BB11' };
      case 'Grave':
        return { backgroundColor: '#E20B26' };
      case 'Em observação':
        return { backgroundColor: '#FABC00' };
      default:
        return {};
    }
  };

  return (
    <div className='container-linha'>
      <div className='linha-tabela linha-nome'>{nome}</div>

      <div
        className='linha-tabela linha-prontuario'
        onClick={() => toast.warning('Função em construção!')}
      >
        <Toaster richColors />
        Exibir prontuário
      </div>

      <div className='linha-tabela linha-data'>{atualizacao}</div>

      <div className='linha-tabela linha-estado'>
        <span className='estado-badge' style={getEstadoStyle(estado)}>
          {estado}
        </span>
      </div>
    </div>
  );
};

export default ItemTabela;