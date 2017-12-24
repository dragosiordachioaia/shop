import React, { Component } from 'react';
import { Autobind } from '../utils';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from 'smart_components/header';
import Banner from 'dumb_components/banner';
import LoginForm from 'smart_components/login';
import CreateUserForm from 'smart_components/create_user';

export default class App extends Autobind {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Banner />
          <Header />
          <div>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={CreateUserForm} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
