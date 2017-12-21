import React from 'react';
import {smartComponent, Autobind} from '../utils';

export default smartComponent(
  class Demo extends Autobind {
    componentDidMount() {
      this.props.demoAction();
    }

    render() {
      return (
        <nav>
          <div className="left-part">
            <a>Shop</a>
            <a>Craft</a>
            <a>About</a>
          </div>
          <div className="logo">
            Jack Erwin
          </div>
          <div className="right-part">
            <a>Help</a>
            <a>Visit</a>
            <a>Login</a>
          </div>
        </nav>
      )
    }
  }
)
