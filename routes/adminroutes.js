const express=require('express');
const { addmanager,addsalesexecutive,updateLoanRates } =require("../controllers/admin");

const router=express.Router();

router.route("/manager/new").post(addmanager);
router.route("/salesexecutive/new").post(addsalesexecutive);
router.route("/loanrates/new").put(updateLoanRates);


module.exports=router;