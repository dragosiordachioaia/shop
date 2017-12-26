import React from 'react';
import {smartComponent, Autobind} from '../utils';

export default smartComponent(
  class extends Autobind {
    render() {
      return (
        <div className="page-offer-1">
          <p>This is the offer's page</p>
        </div>
      )
    }
  }
)
