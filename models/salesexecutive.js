'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SalesExecutive extends Model {
    static associate(models) {
      SalesExecutive.belongsTo(models.Manager, {
        foreignKey: 'ManagerID', // Specify the foreign key linking to the Manager table
        as: 'manager', // Optional alias to use when querying for the associated manager
      });
    }
  }

  SalesExecutive.init({
    SalesExecutiveID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Username: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SalesExecutive',
  });

  return SalesExecutive;
};
