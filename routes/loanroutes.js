const express=require('express');
const { applyForBikeLoan,applyForCarLoan,applyForGoldLoan,applyForPropertyLoan,requestLoanPreClosure } =require("../controllers/loan");

const router=express.Router();

router.route("/carloan/apply").post(applyForCarLoan);
router.route("/goldloan/apply").post(applyForGoldLoan);
router.route("/propertyloan/apply").post(applyForPropertyLoan);
router.route("/bikeloan/apply").post(applyForBikeLoan);
router.route("/preclosure").post(requestLoanPreClosure);

module.exports=router;