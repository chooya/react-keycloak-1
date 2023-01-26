import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./services/Keycloak"
import {  BrowserRouter, Route, Routes  } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
//화면 
import Inform from "./pages/Inform";
import Welcome from "./pages/Welcome";
// import Login from "./pages/login";

const App = () => (
  // <Provider store={store}>
  <ReactKeycloakProvider authClient={keycloak}>
    <BrowserRouter>
      <div className="container">
      <Routes>
          <Route exact path="/aip" element={<Welcome />} />
          {/* <Route exact path="/login" element={<Login />} />           */}
      </Routes>
      <PrivateRoute>
          <Inform/>
        </PrivateRoute>

      </div>
    </BrowserRouter>
   </ReactKeycloakProvider>
);

export default App;