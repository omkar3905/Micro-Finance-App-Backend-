const express=require('express');
const { addsalesexecutive,getAllLoans,getLoanByID,loanstatuschange,fillLoanApplication,approveLoan } =require("../controllers/manager");

const router=express.Router();

router.route("/salesexecutive/new").post(addsalesexecutive);
router.route("/loaninfo/all").get(getAllLoans);
router.route("/loaninfo/:LoanID").get(getLoanByID);
router.route("/loanstatus/:LoanID").put(loanstatuschange);
router.route("/fillloan").post(fillLoanApplication);
router.route("/approveloan/:LoanID").put(approveLoan);


module.exports=router;