import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import Home from "./pages/home";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Router>
        <Auth0Provider
    domain="YOUR_DOMAIN"
    clientId="YOUR_CLIENT_ID"
    redirectUri={window.location.origin}
  ></Auth0Provider>
        <App />
    </Router>,
    document.getElementById("root")
);
