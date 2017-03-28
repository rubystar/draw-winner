import EntriesContainer from './containers/entries-container';
import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';


// const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <EntriesContainer />
      </Provider>
    );
  }
}

export default App;
