import bcrypt from 'bcrypt';
import https from 'http';
import express from 'express';
const app = express();
app.use(express.json());
import { poolUser } from '../config/dbUser.js';

class UserModel {
  static async userlogin(data) {
    try {
      const { userid, pass } = data;
      const result = await poolUser.query('select * from dbo.pr_login_api_users($1)', [userid]);
      const user = result.rows.filter(user => user.user_id == userid);
      if (!user || !bcrypt.compareSync(pass, user[0].user_password)) {
        return 'User Unauthorized';
      }
      return "User Logged In";
    } catch (error) {
      throw error;
    }
  };
  static async createUser(userid, name, email, pass, createdby) {
    try {
      const result = await poolUser.query('select * from dbo.pr_create_api_users($1, $2, $3, $4, $5)', [userid, name, email, pass, createdby]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}
export default UserModel;
