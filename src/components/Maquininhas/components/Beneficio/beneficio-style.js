import styled from 'styled-components';

export const MainBeneficio = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-top: 10px;

    & > span, p {
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
        margin-top: 5px;
    }

    & > span {
        margin-left: 20px;
    }

    & > p {
        margin-left: 5px;
    }
`