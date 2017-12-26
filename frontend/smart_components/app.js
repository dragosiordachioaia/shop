import React, { Component } from 'react';
import { Autobind } from '../utils';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from 'smart_components/header';
import Banner from 'dumb_components/banner';
import LoginForm from 'smart_components/login';
import CreateUserForm from 'smart_components/create_user';
import PageHome from 'smart_components/page_home';
import PageOffer1 from 'smart_components/page_offer_1';

export default class App extends Autobind {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Banner />
          <Route path='/' component={Header} />
          <div className="main-content">
            <Route exact path='/' component={PageHome} />
            <Route exact path='/boxing_day_sale' component={PageOffer1} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={CreateUserForm} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
