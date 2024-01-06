
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function Logout() {
  const { logout } = useAuth0();
  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  const LogoutButton = () => {
    return (
      <button onClick={handleLogout}>
        Log Out
      </button>
    );
  };
  return (
    <div>
      {LogoutButton()}
    </div>
  )
}

export default Logout