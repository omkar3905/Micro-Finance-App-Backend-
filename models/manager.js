'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Manager extends Model {
    static associate(models) {
      Manager.belongsTo(models.Admin, {
        foreignKey: 'AdminID', // Specify the foreign key linking to the Admin table
        as: 'admin', // Optional alias to use when querying
      });

      Manager.hasMany(models.SalesExecutive, {
        foreignKey: 'ManagerID', // Specify the foreign key in the SalesExecutive table
        as: 'salesExecutives', // Optional alias to use when querying for sales executives
      });
    }
  }

  Manager.init({
    ManagerID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Username: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Manager',
  });

  return Manager;
};
