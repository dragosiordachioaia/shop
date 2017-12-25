import React from 'react';
import {smartComponent, Autobind} from '../utils';

export default smartComponent(
  class extends Autobind {
    render() {
      return (
        <p>{this.props.help}</p>
      )
    }
  }
)
