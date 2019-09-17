import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter, Route } from 'react-router-dom'
import Profit from './components/Dashboard/pages/profits'
import Visitors from './components/Dashboard/pages/visitors'
import Users from './components/Dashboard/pages/users'
import Products from './components/Dashboard/pages/products'
import Card from './components/Dashboard/pages/cards'


ReactDOM.render(
  <div>
   <BrowserRouter>
    <div>
      <Route path='/' exact component={App} />
      <Route path = '/profits' exact component={Profit} />
      <Route path = '/visitors' exact component={Visitors} />
      <Route path = '/users' exact component={Users} />
      <Route path = '/products' exact component={Products} />
      <Route path = '/card' exact component={Card} />
 </div>
  </BrowserRouter>
  </div>
  , document.getElementById('root'));
