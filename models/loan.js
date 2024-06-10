'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class loan extends Model {
    static associate(models) {
      loan.belongsTo(models.users, { // Assuming the user model is defined as 'user'
        foreignKey: 'UserID', // Specify the foreign key linking to the user table
        as: 'user', // Optional alias to use when querying
      });

      loan.hasMany(models.LoanPayments, {
        foreignKey: 'LoanID', // Specify the foreign key in the LoanPayments table
        as: 'payments', // Optional alias to use when querying for payments
      });

    }
  }

  loan.init({
    LoanID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    LoanType: DataTypes.STRING,
    LoanAmount: DataTypes.INTEGER,
    InterestRate: DataTypes.INTEGER,
    LoanStatus: DataTypes.STRING,
    Duration: DataTypes.INTEGER,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'loan',
  });

  return loan;
};
