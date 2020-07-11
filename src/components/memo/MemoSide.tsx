import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.aside`
    width: 200px;
    min-height: 300px;
    border: 1px solid #ccc;
    margin-right: 10px;
    & h2 {
        font-size: 25px;
        font-weight: bold;
        padding: 10px 5px;
    }
    & ul {  
        & li {
            border-bottom: 1px solid #ccc;
            padding: 10px 5px;
            &:hover {
                background-color: #ecf0f1;
                cursor: pointer;
            }
            &:first-child {
                border-top: 1px solid #ccc;
            }
            &:last-child{
                margin-bottom : 5px;
            }
        }
    }
`;

const MemoSide: React.FC = () => {
    return (
        <Wrapper>
            <h2>Memo</h2>
            <ul>
                <li>첫번째 메모입니다.</li>
                <li>두번째 메모입니다.</li>
                <li>세번째 메모입니다.</li>
                <li>첫번째 메모입니다.</li>
                <li>두번째 메모입니다.</li>
                <li>세번째 메모입니다.</li>
                <li>첫번째 메모입니다.</li>
                <li>두번째 메모입니다.</li>
                <li>세번째 메모입니다.</li>
                <li>세번째 메모입니다.</li>
            </ul>
        </Wrapper>
    )
}

export default MemoSide;