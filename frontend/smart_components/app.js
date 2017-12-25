import React, { Component } from 'react';
import { Autobind } from '../utils';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from 'smart_components/header';
import Banner from 'dumb_components/banner';
import LoginForm from 'smart_components/login';
import CreateUserForm from 'smart_components/create_user';
import Help from 'smart_components/help';
import Details from 'smart_components/details';

export default class App extends Autobind {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Banner />
          <Route path='/' component={Header} />
          <Route exact path='/' component={Details} />
          <div>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={CreateUserForm} />
            <Help />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
