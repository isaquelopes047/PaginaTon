import { HeaderMain, HeaderContainerImg, HeaderContainerInfos } from './Header-style'
import imgLogo from '../../assets/img/logo.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import dados from '../../mockData'

export default function Header(){
    return (
        <HeaderMain>
            <HeaderContainerImg>
                <img  src={imgLogo} alt="logo da pagina"/>
            </HeaderContainerImg>
            <HeaderContainerInfos>
                <p> Atendimento </p>
                <div>
                    <AiOutlineShoppingCart color='#fff' size={30}/>
                    <a href={dados.linkLojaAfiliado}>
                        <p>Pedir Agora</p>
                    </a>
                </div>
            </HeaderContainerInfos>
        </HeaderMain>
    )
}