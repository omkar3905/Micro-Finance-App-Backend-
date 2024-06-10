const express=require('express');
const { handleCCAVENUEPayment,handleRazorpayPayment } =require("../controllers/payment");

const router=express.Router();

router.route("/payment/ccavenue").post(handleCCAVENUEPayment);
router.route("/payment/razorpay").post(handleRazorpayPayment);


module.exports=router;