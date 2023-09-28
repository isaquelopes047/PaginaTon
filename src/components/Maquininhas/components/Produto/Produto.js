import { MainProduto, ContanierValores, InfoCard } from './Porduto-style'

export default function Produto({imgMaquininha, nomeMaquininha, valorAntigo, valorNovo, valorEmVezes, nomeMaquininhaBotao, linkCompra}){

    const [reais, centavos] = valorEmVezes.split(',');

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
        </MainProduto>
    )
}