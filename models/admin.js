'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {
      Admin.hasMany(models.Manager, {
        foreignKey: 'AdminID', // Specify the foreign key in the Manager table
        as: 'managers', // Optional alias to use when querying for managers
      });
    }
  }

  Admin.init({
    AdminID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Username: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Admin',
  });

  return Admin;
};
