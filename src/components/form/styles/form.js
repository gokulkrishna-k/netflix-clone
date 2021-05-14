import styled from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;

    @media (max-width: 600px) {
        padding: 60px 30px 40px;
        border-radius: 0px;
    }
`;

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 28px;
`;

export const Text = styled.p`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
`;

export const TextSmall = styled.p`
    margin-top: 10px;
    font-size: 13px;
    line-height: normal;
    color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Input = styled.input`
    background: #333;
    border-radius: 4px;
    border: 0;
    color: white;
    height: 50px;
    line-height: 50px;
    padding: 0px 20px;
    margin-bottom: 16px;
    outline: none;

    &:last-of-type {
        margin-bottom: 16px;
    }
    &:focus {
        background: #4a4a4a;
    }
    @media (max-width: 600px) {
        padding: 0px 20px;
    }
`;

export const Submit = styled.button`
    background: #e50915;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 24px 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`;
