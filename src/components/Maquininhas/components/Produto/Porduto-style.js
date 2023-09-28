import styled from 'styled-components';

export const MainProduto = styled.div`
    width: 14vw;
    height: 65vh;
    background-color: #fff;
    margin: 30px;
    border-radius: 15px;
    -webkit-box-shadow: 2px 9px 19px 0px rgb(203 203 203 / 75%);
    -moz-box-shadow: 2px 9px 19px 0px rgb(203 203 203 / 75%);
    box-shadow: 2px 9px 19px 0px rgb(203 203 203 / 75%);

    & > div:nth-child(1){
        width: 100%;
        height: auto;

        & > img {
            margin-top: -60px;
            width: 150px;
        }
    }

    & > div:nth-child(2){
        width: 100%;
        height: auto;

        & > p {
            font-family: 'Lato', sans-serif;
            font-size: 30px;
            margin: 10px 0 0 25px ;
            padding: 0;
        }
    }

    @media (max-width: 930px) {
        width: 70vw;
        margin: 50px;
    } 
`

export const ContanierValores = styled.div`
    width: 100%;
    height: auto;
    display: flex;

    & > div:nth-child(1){
        width: 50%;

        & > p {
            margin: 0 0 0 25px;
            padding: 0;
            font-family: 'Lato', sans-serif;
            font-size: 14px;
        }

        & > p:nth-child(1){
            margin-top: 20px;
        }

        & > p:nth-child(2){
            font-size: 18px;
        }
    }

    & > div:nth-child(2){
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        & > p {
            margin: 0;
            padding: 0;
            font-family: 'Lato', sans-serif;
        }

        & > p:nth-child(1){
            color: black;
            text-align: end;
            margin-bottom: 5px;
            font-size: 13px;
        }

        & > p:nth-child(2){
            font-size: 40px;
            margin-right: 10px;
            color: #0F691D;

            .centavos {
                font-size: 0.5em; /* Defina o tamanho de fonte que você deseja para os centavos */
            }
        }
    }
`

export const InfoCard = styled.div`
    width: 90%;
    height: auto;
    background-color: #C8FFC8;
    margin: 10px auto;
    border: 1px dashed #43D410;
    border-radius: 10px;

    & > p {
        font-family: 'Lato', sans-serif;
        margin: 10px;
        font-size: 13px;
    }

    & > a {

        width: 100%;

        & > button{
            width: 100%;
            height: 40px;
            border-radius: 10px;
            border: none;
            background-color: #0FC321;
            color: #fff;
            cursor: pointer;

            &:hover{
                background-color: #175B1E;
                transition: 0.3s;
            }
        }
    }
`