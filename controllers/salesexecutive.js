const models = require('../models');
const catchAsyncErrors=require("../middleware/catchAsyncError");

//To add new loan application by sales executive
  
exports.fillLoanApplication = catchAsyncErrors(async (req, res, next) => {
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

//Get all loans

exports.getAllLoans = catchAsyncErrors(async (req, res, next) => {
    try {

      const loans = await models.loan.findAll();
  
      return res.status(200).json({
        message: "All loans retrieved successfully",
        loans
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error fetching loans",
        error: error.message
      });
    }
});

//Get loan by particular id

exports.getLoanByID = catchAsyncErrors(async (req, res, next) => {
    try {
      const { LoanID } = req.params;

      const loan = await models.loan.findByPk(LoanID);
  
      if (!loan) {
        return res.status(404).json({ message: 'Loan not found' });
      }
  
      return res.status(200).json({
        message: 'Loan retrieved successfully',
        loan
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error fetching loan',
        error: error.message
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
  