import React from 'react';
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


    render() {
      return (
        <form className="login-form">
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
            this.props.createUser({
              username: this.state.username,
              password: this.state.password
            })
          }>Submit</button>
        </form>
      )
    }
  }
)
