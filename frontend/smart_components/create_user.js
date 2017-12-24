import React from 'react';
import {smartComponent, Autobind} from '../utils';

export default smartComponent(
  class extends Autobind {
    constructor() {
      super();
      this.state = {
        username: 'dragos',
        password: '12345',
        email: 'dogpoop@gmail.com',
      }
    }

    onFormSubmit(e) {
      console.log('onFormSubmit()');
      e.preventDefault();
    }

    render() {
      return (
        <form className="create-user-form" onSubmit={this.onFormSubmit}>
          <h2>Create User</h2>
          <label>Email</label><br />
          <input
            onChange={e => this.setState({email: e.target.value})}
            value={this.state.email}
          />
          <br />
          <br />
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
              password: this.state.password,
              email: this.state.email
            })
          }>Submit</button>
        </form>
      )
    }
  }
)
