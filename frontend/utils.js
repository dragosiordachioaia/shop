import { Component } from 'react';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import * as actions from 'actions/actions';

export class Autobind extends Component {
  constructor() {
    super();

    // get a reference to our prototype
    const prototypeDefinition = Object.getPrototypeOf(this);

    // get a list of all the property names of our class
    const classProperties = Object.getOwnPropertyNames(prototypeDefinition);

    // iterate over all the property names in our class, and if they correspond
    // to a method, then bind that method's "this" value to the class instance itself
    classProperties.forEach(propertyName => {
      if(propertyName !== 'constructor') {
        let propertyValue = this[propertyName];
        if(propertyValue instanceof Function) {
          propertyValue = propertyValue.bind(this);
        }
      }
    });
  }
}

// this will automatically return a connected component which has access to
// all the state, its own props and all the actions, thus reducing boilerplate
export function smartComponent(component) {
  return connect(state => state, dispatch => bindActionCreators(actions, dispatch))(component);
}


export function initStore(state) {
  return applyMiddleware(promiseMiddleware)(createStore)(state);
}
