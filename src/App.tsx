import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home, Memo, Trash } from './pages';
import { PAGE_PATHS } from './constants';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={PAGE_PATHS.HOME} component={Home}/>
          <Route path={PAGE_PATHS.MEMO} component={Memo}/>
          <Route path={PAGE_PATHS.TRASH} component={Trash}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
