const express=require('express');
const { fillLoanApplication,getAllLoans,getLoanByID,uploadDocuments} =require("../controllers/salesexecutive");

const router=express.Router();

router.route("/fillloan").post(fillLoanApplication);
router.route("/loaninfo/all").get(getAllLoans);
router.route("/loaninfo/:LoanID").get(getLoanByID);
router.route("/uploadDocuments").post(uploadDocuments);


module.exports=router;