import './ItemTabelaInternacao.css';
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const ItemTabela = ({ nome, atualizacao, estado }) => {
  const navigate = useNavigate();

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

  const handleExibirRelatorio = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container-linha">
      <div className="linha-tabela linha-nome">{nome}</div>

      <div
        className="linha-tabela linha-prontuario"
        onClick={handleExibirRelatorio}
      >
        <Toaster richColors />
        Exibir relatório
      </div>

      <div className="linha-tabela linha-data">{atualizacao}</div>

      <div className="linha-tabela linha-estado">
        <span className="estado-badge" style={getEstadoStyle(estado)}>
          {estado}
        </span>
      </div>
    </div>
  );
};

export default ItemTabela;
