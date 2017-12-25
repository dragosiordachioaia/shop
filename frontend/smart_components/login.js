import React from 'react';
import { withRouter } from 'react-router-dom';

import Cookies from 'js-cookie';
import {smartComponent, Autobind} from '../utils';

export default smartComponent(
  class extends Autobind {
    constructor() {
      super();
      this.state = {
        username: 'dragos',
        password: 'qwerty',
      }
    }

    componentDidMount() {
      if(Cookies.get('jwt')) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(props) {
      if(Cookies.get('jwt')) {
        props.history.push('/');
      }
    }

    onFormSubmit(e) {
      e.preventDefault();
    }


    render() {
      return (
        <form className="login-form" onSubmit={this.onFormSubmit}>
          <h2>Login</h2>
          <label>Username</label><br />
          <input
            onChange={e => this.setState({username: e.target.value})}
            value={this.state.username}
          />
          <br />
          <br />
          <label>Password</label><br />
          <input
            type="password"
            onChange={e => this.setState({password: e.target.value})}
            value={this.state.password}
          />
          <br />
          <button onClick={e =>
            this.props.login({
              username: this.state.username,
              password: this.state.password
            })
          }>Submit</button>
        </form>
      )
    }
  }
)
