const express=require('express');
const { uploadRCBook,uploadPropertyTax,uploadInsurance,uploadEC,uploadEBBill } =require("../controllers/document");

const router=express.Router();

router.route("/upload/rc-book").post(uploadRCBook);
router.route("/upload/propertyTax").post(uploadPropertyTax);
router.route("/upload/insurance").post(uploadInsurance);
router.route("/upload/EC").post(uploadEC);
router.route("/upload/EBBill").post(uploadEBBill);

module.exports=router;