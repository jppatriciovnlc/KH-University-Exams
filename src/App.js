import React from 'react';
import { Reset } from 'styled-reset';
import Routes from './routes';

import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Reset/>
      <Routes/>
    </Provider>
  );
}

export default App;
