'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('loans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LoanID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserID: {
        type: Sequelize.INTEGER, // This field will store the User ID as a foreign key
        allowNull: false,
        references: {
          model: 'users', // Referencing the 'users' table
          key: 'UserID'       // Referencing the 'id' field in the 'users' table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      LoanType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      LoanAmount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      InterestRate: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      LoanStatus: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Duration: {
        type: Sequelize.INTEGER
      },
      startdate: {
        type: Sequelize.DATE
      },
      enddate: {
        type: Sequelize.DATE
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
    await queryInterface.addConstraint('loans', {
      fields: ['UserID'],
      type: 'foreign key',
      name: 'loans_users_fk',
      references: {
        table: 'users',
        field: 'UserID'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    await queryInterface.addIndex('loans', ['LoanID']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('loans', 'loans_users_fk'); // Remove the foreign key constraint
    await queryInterface.dropTable('loans');
  }
};
