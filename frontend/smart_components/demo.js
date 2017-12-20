import React from 'react';
import {smartComponent, Autobind} from '../utils';

export default smartComponent(
  class Demo extends Autobind {
    componentDidMount() {
      this.props.demoAction();
    }

    render() {
      return (
        <div>
          <p>This is a demo container</p>
          <p>App name, received from server: {this.props.demo.name}</p>
        </div>
      )
    }
  }
)
