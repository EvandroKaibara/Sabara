import './index.css'

import Banner from "./componentes/Banner";
import Botoes from "./componentes/Botoes";
import Navegacao from "./componentes/Navegacao";
import Rodape from './componentes/Rodape';
import Carrossel from './componentes/Carrossel';

function App() {
  return (
    <>
      <Navegacao />
      <Banner />
      <div className='container-botoes'>
        <Botoes texto='Internações' imagem='/img/Prancheta.png'/>
        <Botoes texto='Agendamentos' imagem='/img/Agenda.png'/>
        <Botoes texto='Chat com o paciente' imagem='/img/Chat.png'/>
      </div>
      <Carrossel />
      <Rodape />
    </>
  );
}

export default App;