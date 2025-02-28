import bcrypt from 'bcrypt';
import UserService from '../services/userService.js';
import validationjs from '../validations/userValidation.js';

const userController = {
userlogin : async (req, res) => {
  const { error } = validationjs.validateLoginUser(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  try {
    const retuenStatus = await UserService.userlogin(req.body);
    res.status(200).json({ message: 'Login successful', retuenStatus });
  } catch (err) {
    res.status(500).json({ error: 'Failed to login user' + err });
  }
},
createUser : async (req, res) => {
  const { error } = validationjs.validateUser(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const { userid, name, email, pass, createdby } = req.body;
    const hashedPassword = await bcrypt.hash(pass, 10);
    console.log('Controller ==>>> hashedPassword : ' + hashedPassword + ', userid : ' +userid);
    const newUser = await UserService.createUser(userid, name, email, hashedPassword, createdby);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user : ' + err});
  }
}
}

export default userController;

