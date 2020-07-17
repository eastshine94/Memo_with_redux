import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PAGE_PATHS } from '../../constants';
import {TrashContentContainer} from '../../containers/trash';
const TrashRouter: React.FC = () => {
    return(
        <Switch>
            <Route exact path= {`${PAGE_PATHS.TRASH}/:id`} component = {TrashContentContainer}/>
            <Route exact path= {`${PAGE_PATHS.TRASH}`} component = {() => <div>휴지통이 비었습니다.</div>} />
        </Switch>
    )
}

export default TrashRouter