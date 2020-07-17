import React from 'react';
import styled from 'styled-components';
import { Button } from '../base';
const Wrapper = styled.section`
    & div {
        white-space: pre;
    }
`;

interface Props {
    createdAt: number;
    content: string;
    onRestore(): void;
}

const TrashContent: React.FC<Props> = ({createdAt, content, onRestore}) => {
    const createdAtToDate = new Date(createdAt).toLocaleString();
    return(
        <React.Fragment>
            <Button onClick={onRestore}>복구</Button>
            <Wrapper>
                <div>{createdAtToDate}</div>
                <div>{content}</div>
            </Wrapper>
        </React.Fragment>
    )
}

export default TrashContent;