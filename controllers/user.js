const models = require('../models');
const catchAsyncErrors=require("../middleware/catchAsyncError");

//Applying for loan user

exports.loanApply = catchAsyncErrors(async (req, res, next) => {
    try {
      const {
        LoanID,
        UserID,
        LoanType,
        LoanAmount,
        InterestRate,
        LoanStatus,
        Duration,
        startdate,
        enddate,
      } = req.body;

      const newLoanApplication = await models.loan.create({
        LoanID,
        UserID,
        LoanType,
        LoanAmount,
        InterestRate,
        LoanStatus,
        Duration,
        startdate,
        enddate,
      });
  
      return res.status(201).json({
        message: 'Loan application filled successfully',
        loanApplication: newLoanApplication,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error filling loan application',
        error: error.message,
      });
    }
});


//Upload given documents

exports.uploadDocuments = catchAsyncErrors(async (req, res, next) => {
    try {
      const { DocumentID,UserID, DocumentType, DocumentFile, UploadDate } = req.body;
  
      const newDocument = await models.Documents.create({
        DocumentID,
        UserID,
        DocumentType,
        DocumentFile,
        UploadDate,
      });
  
      return res.status(201).json({
        message: 'Document uploaded successfully',
        document: newDocument,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error uploading document',
        error: error.message,
      });
    }
});

//Monthly loan payments

exports.makeLoanPayment = catchAsyncErrors(async (req, res, next) => {
    try {
      const { PaymentID,LoanID, PaymentDate, AmountPaid, PaymentMethod } = req.body;
  
      const newLoanPayment = await models.LoanPayments.create({
        PaymentID,
        LoanID,
        PaymentDate,
        AmountPaid,
        PaymentMethod,
      });
  
      return res.status(201).json({
        message: 'Loan payment successful',
        loanPayment: newLoanPayment,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error processing loan payment',
        error: error.message,
      });
    }
});
  