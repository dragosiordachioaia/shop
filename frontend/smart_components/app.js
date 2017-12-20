import React, { Component } from 'react';
import { Autobind } from '../utils';

import Demo from 'smart_components/demo';

class App extends Autobind {
  render() {
    return (
        <div>
          <div className="main-content">
            <Demo />
          </div>
        </div>
    );
  }
}

export default App;
