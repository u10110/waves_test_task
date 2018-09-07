import React, { Component } from 'react';
import {  createStore } from 'redux';
import { Provider } from 'react-redux';

import UserApp from './UserApp';
import '../assets/css/App.css';

import reducer from '../reducers';

const store = createStore(reducer);


class App extends Component {

    render() {

        return (
          <div className="App">
              <Provider store={store}>
                    <UserApp />
              </Provider>
          </div>
        );
    }
}

export default App;
