import UserModel from '../models/userModel.js';
class UserService {
  static async userlogin(data) {
    return await UserModel.userlogin(data);
  }
  static async createUser(userid, name, email, pass, createdby) {
    return await UserModel.createUser(userid, name, email, pass, createdby);
  }
}
export default UserService;
