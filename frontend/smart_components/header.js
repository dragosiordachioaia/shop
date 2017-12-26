import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

import {smartComponent, Autobind} from '../utils';

export default smartComponent(
  class extends Autobind {

    checkLogin(props) {
      if(props.location.pathname == '/account' && !Cookies.get('jwt')) {
        props.history.push('/login');
      }
      const jwt = Cookies.get('jwt');
      if(jwt && !props.auth.username) {
        props.getUserDetails();
      }
    }

    componentDidMount() {
      this.checkLogin(this.props);
    }

    componentWillUpdate(props) {
      this.checkLogin(this.props);
    }

    render() {
      let loginButton = "";
      if(Cookies.get('jwt')) {
        loginButton = <a onClick={this.props.logout}>Logout | {this.props.auth.username}</a>;
      } else {
        loginButton = <Link to="/login">Login</Link>
      }

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
            <a onClick={this.props.getHelp}>Help</a>
            {loginButton}
          </div>
        </nav>
      )
    }
  }
)


{/* <Link to="/register">
 Register
</Link> */}
