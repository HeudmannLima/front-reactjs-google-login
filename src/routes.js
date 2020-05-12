import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import ApiList from './pages/ApiList';

export default function src() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/list" component={ApiList} />
      </Switch>
    </BrowserRouter>
  );
}
