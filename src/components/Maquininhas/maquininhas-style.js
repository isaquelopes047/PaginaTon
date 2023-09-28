import styled from 'styled-components';

export const ContainerMainMaquininhas = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;

     @media (max-width: 930px) {
        height: auto;
    } 
`

export const TitleMaquininha = styled.div`
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
    background-color: #fff;

    & > h1, p {
        margin: 0;
        padding: 0;
        font-family: 'Antonio', sans-serif;
    }
`
export const ContainerMaquininhas = styled.div`
    width: 100vw;
    height: 90vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 30px;

    @media (max-width: 950px) {
        flex-direction: column;
        height: auto;
    } 
`