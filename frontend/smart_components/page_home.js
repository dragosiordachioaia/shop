import React from 'react';
import { Link } from 'react-router-dom';

import {smartComponent, Autobind} from '../utils';

export default smartComponent(
  class extends Autobind {
    render() {
      return (
        <div className="page-home">
          <div className="hero">
            <img
              src="https://storage.googleapis.com/eu.artifacts.ceremonial-rush-190313.appspot.com/static_assets/shop-bg-2.jpg"
            />
            <h1>Boxing Day Sale</h1>
            <Link to="/boxing_day_sale">
              <button>See our offer</button>
            </Link>
          </div>
        </div>
      )
    }
  }
)
