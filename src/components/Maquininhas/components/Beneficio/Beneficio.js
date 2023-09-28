import { MainBeneficio } from './beneficio-style';

export default function Beneficio({icon1, beneficio1}){
    return (
        <MainBeneficio>
            <span>{icon1}</span>
            <p>{beneficio1}</p>
        </MainBeneficio>
    )
}