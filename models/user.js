'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.loan, {
        foreignKey: 'UserID',
        as: 'loans',
      });

      User.hasMany(models.Documents, {
        foreignKey: 'UserID',
        as: 'documents', // Optional alias to use when querying for documents
      });
    }
  }

  User.init({
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    UserType: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });

  return User;
};
