import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const Wrapper = styled.section`
    width: 100%;
    border-bottom: 1px solid #ccc;
    & button {
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin: 0 10px 10px 0;
        padding: 8px 16px;
        background-color: #fff;
    }
`;

const MemoHeader: React.FC = () => {
    return (
        <Wrapper>
            <button><Link to='/addMemo'>새로운 메모</Link></button>
        </Wrapper>
    )
}

export default MemoHeader;