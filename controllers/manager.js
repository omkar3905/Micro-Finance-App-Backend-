const models = require('../models');
const catchAsyncErrors=require("../middleware/catchAsyncError");

//Add sales executive by manager

exports.addsalesexecutive=catchAsyncErrors(async(req, res,next)=> {
    try {
        const { SalesExecutiveID, ManagerID , Username, Password } = req.body;

        const salesexecutive = await models.SalesExecutive.create({

            SalesExecutiveID: SalesExecutiveID,
            ManagerID: ManagerID,
            Username: Username,
            Password: Password
        });

        if (salesexecutive) {
            return res.status(201).json({
                message: "Sales executive created successfully",
                salesexecutive
            });
        } else {
            throw new Error("Sales executive creation failed");
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error creating manager",
            error: error.message
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

//Change loan status by LoanID

exports.loanstatuschange = catchAsyncErrors(async (req, res, next) => {
    try {
      const { LoanID } = req.params;
      const { LoanStatus } = req.body;
  
      const loanApplication = await models.loan.findByPk(LoanID);
  
      if (!loanApplication) {
        return res.status(404).json({ message: 'Loan application not found' });
      }
  
      loanApplication.LoanStatus = LoanStatus;
  
      await loanApplication.save();
  
      return res.status(200).json({
        message: 'Loan application status updated successfully',
        loanApplication
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error updating loan application status',
        error: error.message
      });
    }
});

//To add new loan application
  
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

//Loan approved by manager

exports.approveLoan=catchAsyncErrors(async (req, res, next) => {
    try {
      const { LoanID } = req.params;

      const loanApplication = await models.loan.findByPk(LoanID);
  
      if (!loanApplication) {
        return res.status(404).json({ message: 'Loan application not found' });
      }
  
      loanApplication.LoanStatus = 'Approved';

      await loanApplication.save();
  
      return res.status(200).json({
        message: 'Loan application approved successfully',
        loanApplication
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error approving loan application',
        error: error.message
      });
    }
});
  
   