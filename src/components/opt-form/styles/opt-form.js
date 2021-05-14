import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;

    flex-wrap: wrap;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    padding: 10px;
    height: 60px;
    box-sizing: border-box;
    outline-style: none;

    border-radius: 2px 0px 0px 2px;

    @media (max-width: 1000px) {
        border-radius: 2px 2px 2px 2px;
        height: 45px;
    }

    @media (max-width: 600px) {
        max-width: 340px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 60px;
    background: #e50914;
    color: white;
    border-radius: 0px 2px 2px 0px;
    padding: 0 28px;
    font-size: 1.625rem;
    border: 0px;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        background: #f40612;
    }

    @media (max-width: 1000px) {
        height: 45px;
        font-size: 16px;
        margin-top: 15px;
        font-weight: bold;
        border-radius: 2px 2px 2px 2px;
        padding: 0 18px;
    }

    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 18px;

        @media (max-width: 1000px) {
            width: 16px;
        }
    }
`;

export const Text = styled.p`
    font-size: 19.2px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 18px;
        line-height: 22px;
        max-width: 340px;
    }
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;
