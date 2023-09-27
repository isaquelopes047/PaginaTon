import styled from 'styled-components';

export const ContainerMainMaquininhas = styled.div`
    width: 100vw;
    height: 100vh;
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
    height: calc(100vh - 70px);
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 930px) {
        flex-direction: column;
        height: auto;
    } 
`