import Beneficio from '../Beneficio/Beneficio';
import { MainProduto, ContanierValores, InfoCard } from './Porduto-style';

import { BsTruck } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { FaWifi } from 'react-icons/fa';
import { BsBoxArrowInUpLeft, BsQrCodeScan, BsAndroid } from 'react-icons/bs';
import { BiMicrochip } from 'react-icons/bi';
import { TbGenderNeutrois } from 'react-icons/tb';
import { MdOutlineWifiTethering } from 'react-icons/md';

export default function Produto({ beneficio, ...outrasProps }){

    const { imgMaquininha, nomeMaquininha, valorAntigo, valorNovo, valorEmVezes, nomeMaquininhaBotao, linkCompra } = outrasProps;
    const [reais, centavos] = valorEmVezes.split(',');

    const icones = [
        <GrMoney />, 
        <BsTruck />, 
        <FaWifi />, 
        <BsBoxArrowInUpLeft />, 
        <BiMicrochip />, 
        <TbGenderNeutrois />, 
        <BsQrCodeScan />, 
        <MdOutlineWifiTethering />, 
        <BsAndroid />
    ];

    return (
        <MainProduto>
            <div>
                <img src={imgMaquininha} alt='imagensMaquininhas'/>
            </div>
            <div>
                <p> <strong>{nomeMaquininha}</strong> Promo</p>
            </div>

            <ContanierValores>
                <div>
                    <p><del>{valorAntigo}</del></p>
                    <p><strong>{valorNovo}</strong></p>
                    <p>à vista ou</p>
                </div>
                <div>
                    <p>
                        12X<br/>R$
                    </p>
                    <p>
                        <strong>{reais},<span className="centavos">{centavos}</span></strong>
                    </p>
                </div>
            </ContanierValores>

            <InfoCard>
                <p>Receba <strong>100% de cachback</strong> da sua 1° maquininha ao atingir R$ 10 mil em vendas</p>
                <a href={linkCompra}>
                    <button>Pedir agora {nomeMaquininhaBotao}</button>
                </a>
            </InfoCard>

            {beneficio && Object.keys(beneficio).map((chave, index) => (
                <Beneficio key={index} icon1={icones[index]} beneficio1={beneficio[chave]} />
            ))}

        </MainProduto>
    )
}