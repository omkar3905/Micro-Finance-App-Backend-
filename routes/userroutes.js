const express=require('express');
const { loanApply,uploadDocuments,makeLoanPayment } =require("../controllers/user");
const authenticateToken = require('../middleware/auth');

const router=express.Router();

router.route("/loanApply").post(authenticateToken,loanApply);
router.route("/uploadDocuments").post(authenticateToken,uploadDocuments);
router.route("/loanpayment").post(authenticateToken,makeLoanPayment);

module.exports=router;