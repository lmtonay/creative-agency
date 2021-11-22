import React from 'react';
import gicon from '../../images/google-icon.png'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from '../../contexts/UserContext';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router';

export default function LoginForm() {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = React.useContext(UserContext);
  const [loading, setLoading] = React.useState(false);

  const handleLogin = () => {
    setLoading(true);
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = {
          name: result.user.displayName,
          email: result.user.email,
        }
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  return !user.email ? !loading ? (
    <div className="login-form border rounded-1 w-50 mx-auto">
      <h4 className="fw-bold text-center">Login</h4>
      <div onClick={handleLogin} className="button">
        <img src={gicon} alt="Google" />
        <span className="btn-txt">Continue with Google</span>
      </div>
    </div>
  ) : (
    <Spinner className="d-block mx-auto" animation="grow" variant="warning" />
  ) : (
    <Navigate to="/" />
  );
}