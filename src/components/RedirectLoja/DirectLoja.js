import { RirectLojaMain, RirectLojaLeft, RirectLojaRight } from './DirectLoja-style';
import imgLoja from '../../assets/img/loja.png';
import dados from '../../mockData';

export default function DirectLoja(){
    return (
        <RirectLojaMain>
            <RirectLojaLeft>
                <img src={imgLoja} alt='img'/>
            </RirectLojaLeft>

            <RirectLojaRight>
                <div>
                    <h1>Você já conhece a Ton e quer ir direto a loja?</h1>
                    <h2>Clicando no link a baixo você será direcionado diretamente a loja e podera fazer a compra da sua maquininha com 5% de desconto agora mesmo!</h2>
                </div>

                <div>
                    <p>Ir para a loja</p>
                    <a href={dados.linkLojaAfiliado}>
                        <p>Click aqui</p>
                    </a>
                </div>
            </RirectLojaRight>
        </RirectLojaMain>
    )
}