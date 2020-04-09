import React, {useEffect} from 'react';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Provider } from 'react-redux';
import store from '../store'
import Alerts from './Alerts.js'
import Register from './accounts/Register'
import Login from './accounts/Login'
import {loadUser} from '../actions/auth'
// Alert options

const alertOptions =  {
  timeout:3000,
  position:'top center'
}


function App() {

  useEffect(() =>{
    store.dispatch(loadUser())
  })

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Register />
        <br/>
        <br/>
        <Login />
      </AlertProvider>
    </Provider>
    
  );
}

export default App;
