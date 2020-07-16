import React from 'react';
import {Switch,  Route } from 'react-router-dom';
import { PAGE_PATHS } from '../../constants';
import { AddMemoContainer } from '../../containers/memo';

const MemoRouter: React.FC = (props) => {
    return (
        <Switch>
          <Route path={`${PAGE_PATHS.MEMO}/add`} exact component={AddMemoContainer}/>
          <Route path={`${PAGE_PATHS.MEMO}/:id`} exact component={() => <div>야야야</div>} />
          <Route path={`${PAGE_PATHS.MEMO}/`} exact component={() => <div>메모가 없습니다. 새로운 메모를 만들어 보세요.</div>} />
        </Switch>
    )
}


export default MemoRouter;