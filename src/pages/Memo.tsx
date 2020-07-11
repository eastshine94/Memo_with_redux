import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/BaseStyle';
import { MemoHeader, MemoMain, MemoSide } from '../components/memo';

const Wrapper = styled.main`
    margin: 20px 5px;
`;

const MemoContentWrapper = styled(Container)`
    display: flex;
    justify-content: space-between;
`;
const Memo: React.FC = () => {
    return(
        <Wrapper>
            <MemoContentWrapper>
                <MemoSide/>
                <MemoMain/>
            </MemoContentWrapper>
        </Wrapper>
    );
}

export default Memo;