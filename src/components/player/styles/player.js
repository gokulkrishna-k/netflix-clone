import styled from "styled-components/macro";

export const Container = styled.div``;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    margin: 0 auto;
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: auto;

    video {
        height: 100%;
        width: 100%;
    }
`;

export const Close = styled.img`
    position: absolute;
    right: 15px;
    top: 15px;
    filter: brightness(0) invert(1);
    width: 24px;
    opacity: 0.5;
    cursor: pointer;
    transform: scale(0.9);
    transition: transform 0.2s;

    @media (max-width: 600px) {
        width: 16px;
    }
    &:hover {
        opacity: 1;
        transform: scale(1);
    }
`;

export const Button = styled.div`
    background-color: #e50914;
    border-color: #ff0a16;
    width: 115px;
    height: 45px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    font-size: 18px;
    height: 45px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
        background-color: #ff0a16;
    }
`;
