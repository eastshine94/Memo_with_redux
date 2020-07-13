import React from 'react';
import {MemoRouter} from '../../routes';
import { Main } from '../../styles/BaseStyle';
import { Button } from '../base';

const TrashMain: React.FC = () => {
    return (
        <Main>
            <Button>복구</Button>
            <MemoRouter/>
        </Main>
    )
}

export default TrashMain;