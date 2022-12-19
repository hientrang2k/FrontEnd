import axios from "axios";

const authConfig = (username, password) => {
    return axios.post(
        "http://localhost:8080/tele-apoint/oauth/token",
        {
            client_id: "core_client",
            grant_type: "password",
            client_secret: "secret",
            username: username,
            password: password,
        },
        {
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "Authorization": "Basic Y29yZV9jbGllbnQ6c2VjcmV0",
            }
        }
    )
}

export default { authConfig }



