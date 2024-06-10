'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Documents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DocumentID: {
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
      DocumentType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      DocumentFile: {
        allowNull: false,
        type: Sequelize.STRING
      },
      UploadDate: {
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
    await queryInterface.addConstraint('Documents', {
      fields: ['UserID'],
      type: 'foreign key',
      name: 'documents_users_fk',
      references: {
        table: 'users',
        field: 'UserID'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Documents', 'documents_users_fk'); // Remove the foreign key constraint
    await queryInterface.dropTable('Documents');
  }
};
