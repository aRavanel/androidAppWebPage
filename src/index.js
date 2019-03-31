import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,  Route, Switch} from 'react-router-dom';
import Algorithm from './components/algorithm';

import reducers from './reducers';
import UserManual from './components/userManual';
import MainPage from './components/mainPage';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      <Switch>
        <Route path="/algorithm" component={Algorithm}/>
        <Route path="/usermanual" component={UserManual}/>
        <Route path="/" component={MainPage}/>
        </Switch>  
      </div>
    </BrowserRouter>
  </Provider>

  
  , document.querySelector('.container'));
