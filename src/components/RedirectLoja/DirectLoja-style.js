import styled from 'styled-components';

export const RirectLojaMain = styled.div`
    width: 100vw;
    height: 35vh;
    background-color: #FFFFFF;
    display: flex;

    @media (max-width: 930px) {
        width: 100%;
        padding: 0px;
        height: auto;
        flex-direction: column;
    }
`

export const RirectLojaLeft = styled.div`
    width: 30%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 930px) {
        width: 100%;
    }
`

export const RirectLojaRight = styled.div`
    width: 70%;
    height: auto;
    padding-bottom: 30px;

    @media (max-width: 930px) {
        width: 100%;
    }

    & > div:nth-child(1){
        margin: 0;
        padding: 0;
        padding-right: 30%;
        padding-top: 50px;

        h1 {
            color: #002E0D;
            margin: 0;
            padding: 0;
            font-family: 'Open Sans', sans-serif;
        }

        h2 {
            color: #004503;
            margin: 0;
            padding: 0;
            font-family: 'Open Sans', sans-serif;
            font-weight: 100;
            font-size: 20px;
        }

        @media (max-width: 930px) {
            width: 100%;
            height: auto;

            h1 {
                padding: 0px 30px 0 30px;
                margin-top: -30px;
                text-align: center;
            }

            h2 {
                padding: 5vh 30px 0 30px;
                margin-top: -30px;
                text-align: center;
            }
        }
    }

    & > div:nth-child(2){

        p {
            font-family: 'Open Sans', sans-serif;
            color: #004503;
        }

        & > a {
            width: 300px;
            height: 40px;
            background-color: #32A428;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            cursor: pointer;
            color: #fff;

            @media (max-width: 930px) {
                width: 90%;
            }

            & > p {
                color: #fff;
                font-family: 'Open Sans', sans-serif;
            }

            &:hover{
                background-color: #1D7615;
                transition: 0.3s;
            }
        }

        @media (max-width: 930px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

`

