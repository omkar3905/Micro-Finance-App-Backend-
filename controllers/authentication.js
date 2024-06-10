const User= require("../models/user");
const catchAsyncErrors=require("../middleware/catchAsyncError");
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

exports.authenticateUser = catchAsyncErrors(async (req, res,next) => {

    const { Email, Password } = req.body;

    try {
       
        const user = await User.findOne({ where: { Email } });

        if (!user || user.Password !== Password) {

          return res.status(401).json({ error: 'Invalid Email or password' });
        }

        const token = jwt.sign({ user: user.dataValues }, secretKey, { expiresIn: '1h' });

        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                UserID: user.UserID,
                Username: user.Username,
                UserType: user.UserType,
                Email: user.Email,
    
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error in user Login" });
    }
});


exports.signup = catchAsyncErrors(async (req, res,next) => {

    const { UserID,Username, Password, UserType, Email } = req.body;
  
    try {

      const newUser = await User.create({ UserID,Username, Password, UserType, Email });
  
      res.status(201).json({
        message: 'User created successfully',
        user: {
          UserID: newUser.UserID,
          Username: newUser.Username,
          UserType: newUser.UserType,
          Email: newUser.Email,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating user' });
    }
});