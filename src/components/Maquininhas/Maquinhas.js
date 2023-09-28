import Produto from './components/Produto/Produto';
import { ContainerMainMaquininhas, TitleMaquininha, ContainerMaquininhas } from './maquininhas-style';
import dados from '../../mockData';

import t1promo from '../../assets/img/maquininhas/machine-t1promo.png';
import t1chippromo from '../../assets/img/maquininhas/machine-t1.png';
import t2promo from '../../assets/img/maquininhas/machine-t2.png';
import t3 from '../../assets/img/maquininhas/machine-t3.png';
import t3smarth from '../../assets/img/maquininhas/machine-t3-smart.png';

export default function Maquininhas(){

    const produtos = [
        {
            imgMaquininha: t1promo,
            nomeMaquininha: "T1",
            valorAntigo: "R$ 198,80",
            valorNovo: "R$ 101,46",
            valorEmVezes: "8,46",
            nomeMaquininhaBotao: "T1 promo",
            linkCompra: dados.LinkCompraT1Promo
        },
        {
            imgMaquininha: t1chippromo,
            nomeMaquininha: "T1 Chip",
            valorAntigo: "R$ 318,80",
            valorNovo: "R$ 272,46",
            valorEmVezes: "22,70",
            nomeMaquininhaBotao: "T1 Chip promo",
            linkCompra: dados.LinkCompraT1ChiPromo
        },
        {
            imgMaquininha: t2promo,
            nomeMaquininha: "T2 +",
            valorAntigo: "R$ 478,80",
            valorNovo: "R$ 181,26",
            valorEmVezes: "15,10",
            nomeMaquininhaBotao: "T2 + Promo",
            linkCompra: dados.LinkCompraT2Promo
        },
        {
            imgMaquininha: t3,
            nomeMaquininha: "T3",
            valorAntigo: "R$ 958,80",
            valorNovo: "R$ 375,06",
            valorEmVezes: "31,25",
            nomeMaquininhaBotao: "T3 Promo",
            linkCompra: dados.LinkCompraT3Promo
        },
        {
            imgMaquininha: t3smarth,
            nomeMaquininha: "T3 Smart",
            valorAntigo: "R$ 958,80",
            valorNovo: "R$ 454,86",
            valorEmVezes: "37,97",
            nomeMaquininhaBotao: "T3 Smart",
            linkCompra: dados.LinkCompraT3SmartPromo
        },
    ];

    function renderizarProdutos() {
        return produtos.map((produto, index) => (
            <Produto
                key={index}
                imgMaquininha={produto.imgMaquininha}
                nomeMaquininha={produto.nomeMaquininha}
                valorAntigo={produto.valorAntigo}
                valorNovo={produto.valorNovo}
                valorEmVezes={produto.valorEmVezes}
                nomeMaquininhaBotao={produto.nomeMaquininhaBotao}
                linkCompra={produto.linkCompra}
            />
        ));
    }

    return (
        <ContainerMainMaquininhas>
            <TitleMaquininha>
                <h1>Escolha sua Maquininha</h1>
                <p>Taxa 0% no Pix nos primeiros 30 dias pras máquinas T3 e T3 Smart</p>
            </TitleMaquininha>
            <ContainerMaquininhas>

                {renderizarProdutos()}

            </ContainerMaquininhas>
        </ContainerMainMaquininhas>
    )
}