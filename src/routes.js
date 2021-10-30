import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from './pages/test';
import TestEditor from './pages/test-editor';

export default function Routes(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/test">
          <Test props={props} />
        </Route>
        <Route path="/editor">
          <TestEditor props={props} />
        </Route>       
        <Route path="/">
          <Test props={props} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
