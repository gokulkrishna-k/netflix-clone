import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    border-bottom: 8px solid #222;
    text-align: center;
    padding: 150px 45px;

    @media (max-width: 600px) {
        padding: 28px 16px 92px 16px;
    }
`;

export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 3.125rem;
    font-weight: bold;
    line-height: 1.1;

    margin: auto;

    @media (max-width: 600px) {
        font-size: 28px;
    }
`;

export const SubTitle = styled.h2`
    color: white;
    font-size: 1.625rem;
    font-weight: normal;
    margin: 10px auto;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;
