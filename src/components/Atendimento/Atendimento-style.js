import styled from 'styled-components'

export const ContainerMainAtendimento = styled.div`
    width: 100vw;
    height: 40vh;
    background-color: #1C841C;
    display: flex;
    flex-direction: row;
    padding-bottom: 40px;

    /* Estilos para telas com largura máxima de 768px */
    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        margin-top: 90px;
    }
`

export const ContainerText = styled.div`
    width: 50%;
    height: auto;
    padding-left: 120px;
    margin-top: 40px;

    @media (max-width: 930px) {
        width: 100%;
        padding: 0px;
        margin-top: 0;
    }

    & > div:nth-child(1) {
        width: auto;
        height: auto;

        @media (max-width: 930px) {
            padding: 20px;
        }

        & > h1 {
            color: #fff;
            font-family: 'Open Sans', sans-serif;
            margin: 0;
            padding: 0;
        }

        & > h3 {
            color: #fff;
            font-family: 'Open Sans', sans-serif;
            font-weight: 100;
            margin: 0;
            padding: 0;
        }
    }

    & > div:nth-child(2) {
        margin-top: 20px;
    }

    & > div:nth-child(4) > p {
        font-weight: 600;
    }

    & > div:nth-child(5) > a {
        width: 100%;
        height: 45px;
        background-color: #fff;
        margin-left: 10px;
        margin-top: 30px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: "grey";

        & > div {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Open Sans', sans-serif;
        }

        & > p {
            color: black;
            font-family: 'Open Sans', sans-serif;
        }

        &:hover{
            background-color: #cecece;
            transition: 0.3s;
            cursor: pointer;
        }
    }

`

export const InforContainer = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > p {
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        font-weight: 100;
        font-size: 20px;
        margin: 0;
        padding: 0;
    }

    @media (max-width: 930px) {
        width: auto;
        padding: 0 20px;

        & > p {
            font-size: 16px;
        }
    }   
`

export const ContainerImg = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    
    & > img {
        margin-right: 10rem;
    }

    @media (max-width: 930px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        & > img {
            margin-right: 0rem;
        }
    }
    `