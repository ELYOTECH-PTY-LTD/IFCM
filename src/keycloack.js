import Keycloak from "keycloak-js";

// Setup Keycloak instance as needed
const keycloak = new Keycloak({
        "realm": "IFCM",
        "auth-server-url": "http://localhost:8080/auth/",
        "ssl-required": "external",
        "resource": "my-react-client",
        "public-client": true,
});

export default keycloak;