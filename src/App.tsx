import React, {Component} from 'react';
import { Memo } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Memo}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
