

import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import Route1 from './routes/Route1.js';
import Route2 from './routes/Route2.js';
import Route3 from './routes/Route3.js';


export default (
  <Switch>
      <Route exact path="/" component={ Route1 } />
      <Route path="/2" component={ Route2 } />
      <Route path="/3" component={ Route3 } />
  </Switch> 
      
)
