import React from 'react';
import styled from 'styled-components';
import MemoHeader from './MemoHeader';

const Wrapper = styled.section`
    width: 1000px;
    border: 1px solid #ccc;
    margin-right: 10px;
    padding: 10px;
`;

const MemoMain: React.FC = () => {
    return (
        <Wrapper>
            <MemoHeader/>
        </Wrapper>
    )
}

export default MemoMain;