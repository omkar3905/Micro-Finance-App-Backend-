const models = require('../models');
const catchAsyncErrors=require("../middleware/catchAsyncError");

// Apply for a car loan

exports.applyForCarLoan = catchAsyncErrors(async (req, res, next) => {
    try {

      const { LoanID,UserID, LoanAmount, InterestRate, Duration } = req.body;
      const loanType = 'Car';
  

      const newLoan = await models.loan.create({
        LoanID,
        UserID,
        LoanType: loanType,
        LoanAmount,
        InterestRate,
        LoanStatus: 'Pending',
        Duration,
        StartDate: new Date(),
        EndDate: new Date(new Date().setMonth(new Date().getMonth() + Duration)),

      });
  
      return res.status(201).json({
        message: 'Car loan applied successfully',
        loanDetails: newLoan,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error applying for a car loan',
        error: error.message,
      });
    }
});

// Apply for a bike loan

exports.applyForBikeLoan = catchAsyncErrors(async (req, res, next) => {
    try {
      
      const { LoanID,UserID, LoanAmount, InterestRate, Duration } = req.body;
      const loanType = 'Bike';
  
      const newLoan = await models.loan.create({
        LoanID,
        UserID,
        LoanType: loanType,
        LoanAmount,
        InterestRate,
        LoanStatus: 'Pending',
        Duration,
        StartDate: new Date(),
        EndDate: new Date(new Date().setMonth(new Date().getMonth() + Duration)),

      });
  
      return res.status(201).json({
        message: 'Bike loan applied successfully',
        loanDetails: newLoan,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error applying for a bike loan',
        error: error.message,
      });
    }
});


// Apply for gold loan

exports.applyForGoldLoan = catchAsyncErrors(async (req, res, next) => {
    try {
    
      const { LoanID,UserID, LoanAmount, InterestRate, Duration } = req.body;
      const loanType = 'Gold';
  
      const newLoan = await models.loan.create({
        LoanID,
        UserID,
        LoanType: loanType,
        LoanAmount,
        InterestRate,
        LoanStatus: 'Pending',
        Duration,
        StartDate: new Date(),
        EndDate: new Date(new Date().setMonth(new Date().getMonth() + Duration)),

      });
  
      return res.status(201).json({
        message: 'Gold loan pledged successfully',
        loanDetails: newLoan,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error pledging gold for the loan',
        error: error.message,
      });
    }
});
  

// Request pre-closure for a loan

exports.requestLoanPreClosure = catchAsyncErrors(async (req, res, next) => {
    try {
      
      const { LoanID } = req.body;
  
      await models.loan.update(
        { LoanStatus: 'Closed' },
        { where: { LoanID } }
      );
  
      return res.status(200).json({
        message: 'Pre-closure requested for the loan successfully',
        LoanID,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error requesting pre-closure for the loan',
        error: error.message,
      });
    }
});

// Apply for a property loan

exports.applyForPropertyLoan = catchAsyncErrors(async (req, res, next) => {
    try {
      
      const { LoanID,UserID, LoanAmount, InterestRate, Duration } = req.body;
      const loanType = 'Property'; 
  
     
      const newLoan = await models.loan.create({
        LoanID,
        UserID,
        LoanType: loanType,
        LoanAmount,
        InterestRate,
        LoanStatus: 'Pending',
        Duration,
        StartDate: new Date(),
        EndDate: new Date(new Date().setMonth(new Date().getMonth() + Duration)),

      });
  
      return res.status(201).json({
        message: 'Property loan applied successfully',
        loanDetails: newLoan,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error applying for a property loan',
        error: error.message,
      });
    }
});
  
  