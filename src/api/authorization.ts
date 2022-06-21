// import axios from "axios";
import { User } from "Types/user";

export default class AuthorizationApi {
  static login(email: string, password: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        // let response = await axios.post("/login", { email, password });
        // // Find the user
        // resolve(response.data.token);
      } catch (err) {
        console.error("[Auth Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  static me(accessToken: string): Promise<User> {
    return new Promise((resolve, reject) => {
      try {
        const user: User = {
          id: "5e86809283e28b96d2d38537",
          avatar: "/static/mock-images/avatars/avatar-jane_rotanson.png",
          email: "demo@demo.com",
          name: "Ahsan Ali Mansoor",
          password: "Password123!",
          plan: "Premium",
        };

        resolve(user);
      } catch (err) {
        console.error("[Auth Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  static register(
    email: string,
    name: string,
    password: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        // Find the user
        resolve("accessToken");
      } catch (err) {
        console.error("[Auth Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }
}
