import { MainRodape, LeftRodape, RightRodape } from './Rodape-style'
import imgParceiro from '../../assets/img/parceiroTon.png'
import dados from '../../mockData';

export default function Rodape(){
    return (
        <MainRodape>
            <LeftRodape>
                <img src={imgParceiro} alt='img'/>
                <p>Ficou alguma duvida? <br />Conside um atendimento para lhe ajudar</p>
            </LeftRodape>
            <RightRodape>
                <p>produtoston@gmail.com</p>
                <p>(47) 99907-8865</p>
                <a href={dados.linkWhats}>
                    <p> Click aqui </p>
                </a>
            </RightRodape>
        </MainRodape>
    )
}