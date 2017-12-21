import React, { Component } from 'react';
import { Autobind } from '../utils';

import Header from 'smart_components/header';
import Banner from 'dumb_components/banner';

export default class App extends Autobind {
  render() {
    return (
        <div>
          <Banner />
          <Header />
        </div>
    );
  }
}
