import { ContainerMain } from './App-style'
import Atendimento from './components/Atendimento/Atendimento';
import Header from './components/Header/Header';
import Maquininhas from './components/Maquininhas/Maquinhas';
import DirectLoja from './components/RedirectLoja/DirectLoja';
import Rodape from './components/Rodape/Rodape';

function App() {
  return (
    <ContainerMain>
      <Header />
      <Atendimento />
      <Maquininhas />
      <DirectLoja />
      <Rodape />
    </ContainerMain>
  );
}

export default App;
