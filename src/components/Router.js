import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import { UserContext } from '../contexts/UserContext';

export default function Router() {

  const [user, setUser] = React.useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, [setUser])

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}