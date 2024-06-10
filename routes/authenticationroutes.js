const express=require('express');
const { authenticateUser,signup } =require("../controllers/authentication");

const router=express.Router();

router.route("/user/login").post(authenticateUser);
router.route("/user/signup").post(signup);

module.exports=router;