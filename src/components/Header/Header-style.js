import styled from 'styled-components'

export const HeaderMain = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    /* Estilos para telas com largura máxima de 768px */
    @media (min-width: 768px) {
        flex-direction: column;
    }
`

export const HeaderContainerImg = styled.div`
    width: 50%;
    height: 90px;
    background-color: #fff;
    display: flex;

    /* Estilos para telas com largura máxima de 768px */
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`

export const HeaderContainerInfos = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');

    width: 50%;
    height: 90px;
    background-color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > p {
        font-family: 'Oswald', sans-serif;
        margin-right: 30px;
        margin-left: 5px;
    }

    & > div {
        padding: 0 40px;
        background-color: #27CE24;
        margin-right: 10px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        & > p {
            color: #fff;
            font-family: 'Oswald', sans-serif;
        }

        & > a {
            color: #fff;
            font-family: 'Open Sans', sans-serif;
        }

        &:hover{
            background-color: #1C841C;
            transition: 0.3s;
            cursor: pointer;
        }
    }

    /* Estilos para telas com largura máxima de 768px */
    @media (max-width: 768px) {
        width: 100%;

        & > p {
            display: none;
        }

        & > div {
            width: 100%;
            padding: 0 40px;
            background-color: #27CE24;
            margin-right: 10px;
            margin-left: 10px;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`