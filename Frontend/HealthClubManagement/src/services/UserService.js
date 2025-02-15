import axios from "axios";

class UserService {
  static BASE_URL = "http://localhost:8080";

  static async login(email, password) {
    try {
      const response = await axios.post(`${UserService.BASE_URL}/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (err) {
      throw err;
      console.log(err);
    }
  }   
    
  static async getAllUsers(token) {
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/admin/get-all-users`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async updateUser(userId, userData, token) {
    try {
      const response = await axios.put(
        `${UserService.BASE_URL}/user/updateUser/${userId}`,
        userData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }


  
  /**AUTHENTICATION CHECKER */
  static logout() {
    console.log("calling logout method")
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");

    // for forgot password fields
    localStorage.removeItem("otp");
    localStorage.removeItem("email");

  }

  
}

export default UserService;
