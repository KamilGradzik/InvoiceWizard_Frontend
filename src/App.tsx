import React, { ReactElement } from 'react';
import LoginView from './views/login-view';
import RegisterView from './views/register-view';

const App:React.FC = ():ReactElement => {
  return (
    <React.Fragment>
      <RegisterView />
    </React.Fragment>
  )
}

export default App;
