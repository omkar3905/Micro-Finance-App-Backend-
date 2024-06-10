const models = require('../models');
const catchAsyncErrors=require("../middleware/catchAsyncError");

//Payment by CCAvenue method

exports.handleCCAVENUEPayment = catchAsyncErrors(async (req, res, next) => {
    try {

        const { PaymentID,LoanID, AmountPaid, PaymentDate } = req.body;
    
        const newPayment = await models.LoanPayments.create({
            PaymentID,
            LoanID,
            PaymentDate,
            AmountPaid,
            PaymentMethod: 'CCAVENUE',
        });
    
        return res.status(201).json({
            message: 'Payment processed via CCAvenue',
            paymentDetails: newPayment,
        });
        } catch (error) {
        return res.status(500).json({
            message: 'Error processing payment via CCAvenue',
            error: error.message,
        });
        }
});


//Payment by Razorpay

exports.handleRazorpayPayment = catchAsyncErrors(async (req, res, next) => {
    try {

        const { PaymentID,LoanID, AmountPaid, PaymentDate } = req.body;


        const newPayment = await models.LoanPayments.create({
            PaymentID,
            LoanID,
            PaymentDate,
            AmountPaid,
            PaymentMethod: 'Razorpay',

        });
    
        return res.status(201).json({
            message: 'Payment processed via Razorpay',
            paymentDetails: newPayment,
        });
        } catch (error) {
        return res.status(500).json({
            message: 'Error processing payment via Razorpay',
            error: error.message,
        });
        }
});
  
  