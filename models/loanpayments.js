'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LoanPayments extends Model {
    static associate(models) {
      LoanPayments.belongsTo(models.loan, {
        foreignKey: 'LoanID', // Specify the foreign key linking to the Loan table
        as: 'loan', // Optional alias to use when querying
      });
    }
  }

  LoanPayments.init({
    PaymentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    LoanID: DataTypes.INTEGER,
    PaymentDate: DataTypes.DATE,
    AmountPaid: DataTypes.INTEGER,
    PaymentMethod: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LoanPayments',
  });
  
  return LoanPayments;
};
