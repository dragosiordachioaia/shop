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
              src="https://lh4.googleusercontent.com/zT3YZjlpgp6RilW_mzWEKWg_tmlucKzHdLZi_0NDLosYPdWm7jB9zyYdwRwSLp0X8SQFfEM5-t8nX_JvqWFe=w3360-h1592-rw"
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
