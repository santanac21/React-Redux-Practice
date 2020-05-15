import React from 'react';
import './App.css';
import store from "./Redux/store";
import { Provider } from 'react-redux';
import CakeContainer from './Component/CakeContainer';
import IceCreamContainer from './Component/IceCreamContainer';
import UserContainer from './Component/UserContainer'
import CoffeeContainer from './Component/CoffeeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <CoffeeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
