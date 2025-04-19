import './Botoes.css';

const Botoes = ({ texto, imagem }) => {
  return (
    <div className="botao">
      <img src={imagem} alt="Ícone do botão" />
      <span>{texto}</span>
    </div>
  );
}

export default Botoes;
