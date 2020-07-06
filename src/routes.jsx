import React from 'react';
import { Route, IndexRoute }  from 'react-router';
import App from 'components/App';
import CounterPage from 'components/CounterPage';
import HelloWorldPage from 'components/HelloWorldPage';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={HelloWorldPage} />
    <Route component={CounterPage} path='counters' />
  </Route>
);
