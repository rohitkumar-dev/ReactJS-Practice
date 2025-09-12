import { useNavigate } from "react-router-dom";
import conf from "../conf/conf.js";

import { Client, Account, ID, OAuthProvider } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return await this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (err) {
      throw err;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (err) {
      throw err;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      return false;
    }
    return null;
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (err) {
      throw err;
    }
  }

  //google auth
  async loginWithGoogle() {
    try {
        this.account.createOAuth2Session({
        provider: OAuthProvider.Google,
        success: "http://localhost:5173/auth/callback",
        failure: "http://localhost:5173/login"
      });
    } catch (err) {
      throw err;
    }
  }


}

const authService = new AuthService();

export default authService;
