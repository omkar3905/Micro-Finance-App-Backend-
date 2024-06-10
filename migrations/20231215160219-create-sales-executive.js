'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalesExecutives', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SalesExecutiveID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ManagerID: {
        type: Sequelize.INTEGER, // This field will store the Manager ID as a foreign key
        allowNull: false,
        references: {
          model: 'Managers', // Referencing the 'Managers' table
          key: 'ManagerID'   // Referencing the 'ManagerID' field in the 'Managers' table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      Username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Password: {
        allowNull: false,
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
    await queryInterface.addConstraint('SalesExecutives', {
      fields: ['ManagerID'],
      type: 'foreign key',
      name: 'salesexecutives_managers_fk',
      references: {
        table: 'Managers',
        field: 'ManagerID'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('SalesExecutives', 'salesexecutives_managers_fk'); // Remove the foreign key constraint
    await queryInterface.dropTable('SalesExecutives');
  }
};
