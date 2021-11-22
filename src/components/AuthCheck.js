import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Redirect } from 'react-router-dom';

export default function AuthCheck({ element, path }) {
  const [user] = useContext(UserContext);
  return (
    user.email ? (
      <Redirect to={path} />
    ) : (
      <Redirect to="/login" />
    )
  );
}