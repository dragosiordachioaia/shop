import React from 'react';

import { Link } from 'react-router-dom';

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
            <Link to="/">
              Jack Erwin
            </Link>

          </div>
          <div className="right-part">
            <a>Help</a>
            <Link to="/login">
              Login
            </Link>
            <Link to="/register">
              Register
            </Link>
          </div>
        </nav>
      )
    }
  }
)
