import React from 'react';
import UserContextProvider from '../contexts/UserContext';
import Router from './Router';

function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

export default App;
