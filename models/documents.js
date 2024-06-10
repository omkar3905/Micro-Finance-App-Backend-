'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Documents extends Model {
    static associate(models) {
      Documents.belongsTo(models.users, {
        foreignKey: 'UserID', // Specify the foreign key linking to the User table
        as: 'user', // Optional alias to use when querying
      });
    }
  }

  Documents.init({
    DocumentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DocumentType: DataTypes.STRING,
    DocumentFile: DataTypes.STRING,
    UploadDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Documents',
  });

  return Documents;
};
