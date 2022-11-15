import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./services/Keycloak"
import {  BrowserRouter, Route, Routes  } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
//화면 
import Menu from "./pages/Menu";
import Welcome from "./pages/Welcome";

const App = () => (
  // <Provider store={store}>
  <ReactKeycloakProvider authClient={keycloak}>
    <BrowserRouter>
      <div className="container">
      <Routes>
          <Route exact path="/" element={<Welcome />} />
      </Routes>
      <PrivateRoute>
          <Menu/>
        </PrivateRoute>

      </div>
    </BrowserRouter>
   </ReactKeycloakProvider>
);

export default App;