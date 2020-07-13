import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface BtnProps {
    to?: string;
    onClick?(): void;
}

const Wrapper = styled.button`
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0 10px 10px 0;
    padding: 8px 16px;
    background-color: #fff;
    font-weight: bold;
    &:hover{
        background-color: #ecf0f1;
        cursor: pointer;
    }
`;

const Button: React.FC<BtnProps> = (props) => {
    const {children, to, onClick} = props;
    const renderLink = () => {
        if (!to) {
            return <div></div>
        }
        return (
            <Link to={to}><Wrapper>{children}</Wrapper></Link>
        )
    }
    const renderBtn = () => {
        return (
            <Wrapper onClick={onClick}>{children}</Wrapper>
        )
    }

    return to ? renderLink() : renderBtn();
}


export default Button;