import React from 'react';
import { Switch, Route } from "react-router-dom";
import Feed from './pages/Feed';
import News from './pages/News';


export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Feed} />
      <Route path='/news' component={News} />
    </Switch>
  );
}
