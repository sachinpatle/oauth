import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const AuthProviderWithNaviagate = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
    domain="dev-u1waulh8g3rz6ey3.us.auth0.com"
    clientId="3JO9VIzOsBIQnKGSW5B6ybsji5CmNZNn"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
