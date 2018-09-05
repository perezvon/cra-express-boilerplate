import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import { NotFound } from './NotFound';
import {Home} from './Home';
import Login from './Login';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Navigation />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route path='*' component={NotFound} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
