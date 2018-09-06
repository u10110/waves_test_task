import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import UsersApp from './UsersApp';
import '../assets/css/App.css';

import reducer from '../reducers';

const store = createStore(reducer);



class App extends Component {

    render() {

        return (
          <div className="App">
              <Provider store={store}>
                    <UsersApp />
              </Provider>
          </div>
        );
    }
}

export default App;
