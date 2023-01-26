import Keycloak from "keycloak-js";
const keycloak = new Keycloak('/keycloak.json');
// const keycloak = new Keycloak('/keycloak_local.json');
export default keycloak;