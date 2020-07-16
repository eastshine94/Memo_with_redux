import React from 'react';
import {Switch,  Route } from 'react-router-dom';
import { PAGE_PATHS } from '../../constants';
import { AddMemoContainer, MemoContentContainer } from '../../containers/memo';

const MemoRouter: React.FC = (props) => {
    return (
        <Switch>
          <Route path={`${PAGE_PATHS.MEMO}/add`} exact component={AddMemoContainer}/>
          <Route path={`${PAGE_PATHS.MEMO}/:id`} exact component={MemoContentContainer} />
          <Route path={`${PAGE_PATHS.MEMO}/`} exact component={() => <div>메모 없음</div>} />
        </Switch>
    )
}


export default MemoRouter;