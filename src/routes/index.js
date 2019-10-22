import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import Quiz from '~/pages/Quiz';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/quiz" component={Quiz} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
