import { ContainerMainAtendimento, ContainerText, ContainerImg, InforContainer } from './Atendimento-style'
import { AiOutlineCaretRight } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import dados from '../../mockData';

import imgAtendimento from '../../assets/img/imgAtendimento.png'

export default function Atendimento(){
    return (
        <ContainerMainAtendimento>
            <ContainerText>
                <div>
                    <h1>Atendimento com um parceiro oficial Ton?</h1>
                    <h3>Está em dúvida de qual plano se encaixa melhor a você? Nosso atendimento pode te ajudar em:</h3>
                </div>

                <InforContainer>
                    <AiOutlineCaretRight color='#27CE24' size={30}/>
                    <p>Ajuda em escolher a melhor maquininha para seu negócio.</p>
                </InforContainer>

                <InforContainer className='nt3'>
                    <AiOutlineCaretRight color='#27CE24' size={30}/>
                    <p>Tirar suas dúvidas.</p>
                </InforContainer>

                <InforContainer>
                    <AiOutlineCaretRight color='#27CE24' size={30}/>
                    <p>Mostrar que a Ton é a melhor escolha :D</p>
                </InforContainer>

                <InforContainer>
                    <a href={dados.linkWhats}>
                        <div>
                            <p> Click aqui </p>
                            <FaWhatsapp color='#27CE24' size={30}/>
                        </div>
                    </a>
                </InforContainer>
            </ContainerText>

            <ContainerImg>
                <img src={imgAtendimento} alt="img"/>
            </ContainerImg>

        </ContainerMainAtendimento>
    )
}