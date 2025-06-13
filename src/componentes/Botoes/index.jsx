import './Botoes.css';

const Botoes = ({ texto, imagem, onClick }) => {
  return (
    <div className="botao" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={imagem} alt="Ícone do botão" />
      <span>{texto}</span>
    </div>
  );
};

export default Botoes;