import React from 'react';
import {smartComponent, Autobind} from '../utils';

export default smartComponent(
  class extends Autobind {
    render() {
      const username = this.props.auth;
      // alert(JSON.stringify(username));
      return (
        <div>
          <p>Hello! You are logged in.</p>
          <p>Your username is {this.props.auth.username}</p>
        </div>
      )
    }
  }
)
