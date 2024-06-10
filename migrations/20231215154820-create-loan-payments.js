'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LoanPayments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PaymentID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LoanID: {
        type: Sequelize.INTEGER, // This field will store the Loan ID as a foreign key
        allowNull: false,
        references: {
          model: 'loans', // Referencing the 'loans' table
          key: 'LoanID'   // Referencing the 'LoanID' field in the 'loans' table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      PaymentDate: {
        type: Sequelize.DATE
      },
      AmountPaid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      PaymentMethod: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Setting default value to current timestamp
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') // For automatic update on change
      }
    });

    // Adding the foreign key constraint
    await queryInterface.addConstraint('LoanPayments', {
      fields: ['LoanID'],
      type: 'foreign key',
      name: 'loanpayments_loans_fk',
      references: {
        table: 'loans',
        field: 'LoanID'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('LoanPayments', 'loanpayments_loans_fk'); // Remove the foreign key constraint
    await queryInterface.dropTable('LoanPayments');
  }
};
