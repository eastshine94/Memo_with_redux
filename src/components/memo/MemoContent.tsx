import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`

`;

interface Props {
    createdAt: number;
    content: string;
}

const MemoContent: React.FC<Props> = ({createdAt, content}) => {
    const createdAtToDate = new Date(createdAt).toLocaleString();
    return(
        <Wrapper>
            <div>{createdAtToDate}</div>
            <div>{content}</div>
        </Wrapper>
    )
}

export default MemoContent;