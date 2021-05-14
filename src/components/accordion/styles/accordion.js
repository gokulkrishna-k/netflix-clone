import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    /* justify-content: center; */
    margin: auto;

    @media (max-width: 600px) {
        padding: 70px 0px;
    }
`;

export const Item = styled.div`
    color: white;
    max-width: 720px;
    margin: auto;

    margin-bottom: 10px;
    width: 100%;

    &:first-of-type {
        margin-top: 3em;
    }
    @media (max-width: 1000px) {
        max-width: 600px;
    }
    @media (max-width: 600px) {
        margin-bottom: 5px;
        max-width: 420px;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em;
    user-select: none;
    align-items: center;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
        @media (max-width: 600px) {
            width: 16px;
        }
    }
    @media (max-width: 600px) {
        font-size: 16px;
        padding: 1.2em 1.2em;
    }
`;

export const Body = styled.div`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: 1.2em;
    overflow: hidden;
    white-space: pre-wrap;
    user-select: none;
    animation: acc_open 0.35s cubic-bezier(0.5, 0, 0.1, 1);
    /* transition: acc_open 0.25s cubic-bezier(0.5, 0, 0.1, 1); */
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
    @keyframes acc_open {
        0% {
            max-height: 0px;
        }
        100% {
            max-height: 1200px;
        }
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 32px;
    }
`;
