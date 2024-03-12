import React, { ReactElement } from 'react';
import logo from './assets/images/logo.svg';
import LoginView from './views/login-view';

const App:React.FC = ():ReactElement => {
  return (
    <React.Fragment>
      <LoginView />
    </React.Fragment>
  )
}

export default App;
