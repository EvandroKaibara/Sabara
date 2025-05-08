import './ItemTabelaInternacao.css';

import { Toaster, toast } from 'sonner';

const ItemTabela = ({ nome, atualizacao, estado }) => {
  return (
    <div className='container-linha'>
        <div className='linha-tabela linha-nome'>{nome}</div>
        <div className='linha-tabela linha-prontuario' onClick={() => toast.alert('Função em construção!')}><Toaster richColors/>Exibir prontuário</div>
        <div className='linha-tabela linha-data'>{atualizacao}</div>
        <div className='linha-tabela linha-estado'>{estado}</div>
    </div>
  )
}

export default ItemTabela;
