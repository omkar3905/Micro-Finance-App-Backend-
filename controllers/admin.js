const models = require('../models');
const catchAsyncErrors=require("../middleware/catchAsyncError");

//Add manager by admin

exports.addmanager=catchAsyncErrors(async(req, res,next)=> {
    try {
        const { ManagerID,AdminID, Username, Password } = req.body;

        const manager = await models.Manager.create({
            ManagerID: ManagerID,
            AdminID: AdminID,
            Username: Username,
            Password: Password
        });

        if (manager) {
            return res.status(201).json({
                message: "Manager created successfully",
                manager
            });
        } else {
            throw new Error("Manager creation failed");
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error creating manager",
            error: error.message
        });
    }
});

//Add sales executive by admin

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

//Update loan rates by admin

exports.updateLoanRates=catchAsyncErrors(async (req, res, next) => {
    try {
      const { LoanID, InterestRate } = req.body;
  
      const loan = await models.loan.findByPk(LoanID);
  
      if (!loan) {
        return res.status(404).json({ message: 'Loan not found' });
      }
  
      loan.InterestRate = InterestRate;
      await loan.save();
  
      return res.status(200).json({
        message: 'Loan interest rate updated successfully',
        loan,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error updating loan interest rate',
        error: error.message,
      });
    }
});
  