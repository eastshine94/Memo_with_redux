import React from 'react';
import { Main } from '../../styles/BaseStyle';
import {Button} from '../base';
import { PAGE_PATHS } from '../../constants';

const HomeMain: React.FC = () => {
    return (
        <Main>
            <Button to={`${PAGE_PATHS.MEMO}/add`}>새로운 메모</Button>
        </Main>
    )
}

export default HomeMain;