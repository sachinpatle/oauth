import react ,{useState,useEffect ,useContext} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {

  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  const LoginButton = () => {
    return <button onClick={handleLogin}>Log In</button>;
  };


  return (
    <>
      {LoginButton()}
    </>
  );
}

export default Login;