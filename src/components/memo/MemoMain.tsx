import React from 'react';
import {MemoRouter} from '../../routes';
import { Main } from '../../styles/BaseStyle';
import { Button } from '../base';
import { PAGE_PATHS } from '../../constants';
import { RouteComponentProps, withRouter } from 'react-router-dom';
const MemoMain: React.FC<RouteComponentProps> = (props) => {
    const {location} = props;
    return (
        <Main>
            {location.pathname!==`${PAGE_PATHS.MEMO}/add` && <Button to={`${PAGE_PATHS.MEMO}/add`}>새로운 메모</Button>}
            <MemoRouter/>
        </Main>
    )
}

export default withRouter(MemoMain);