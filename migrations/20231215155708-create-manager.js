'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Managers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ManagerID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AdminID: {
        type: Sequelize.INTEGER, // This field will store the Admin ID as a foreign key
        allowNull: false,
        references: {
          model: 'Admins', // Referencing the 'Admins' table
          key: 'AdminID'   // Referencing the 'AdminID' field in the 'Admins' table
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
    await queryInterface.addConstraint('Managers', {
      fields: ['AdminID'],
      type: 'foreign key',
      name: 'managers_admins_fk',
      references: {
        table: 'Admins',
        field: 'AdminID'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    await queryInterface.addIndex('Managers', ['ManagerID']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Managers', 'managers_admins_fk'); // Remove the foreign key constraint
    await queryInterface.dropTable('Managers');
  }
};
