import axios from "axios";

axios.defaults.baseURL = "http://165.227.235.34:8082";

class AuthService {
  login = async (email, password) => {
    try {
      const response = await axios.post("/user/auth/sign-in", {
        email,
        password,
      });

      console.log(response.data);

      localStorage.setItem("accessToken", "some");

      return true;
    } catch (err) {
      return false;
    }
  };

  logout = () => {
    localStorage.removeItem("accessToken");
  };
}

export default new AuthService();
