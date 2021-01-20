'use strict';

module.exports = (sequelize, DataTypes) => {
  const apiKeys = sequelize.define('apiKeys',{
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    key: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Categories',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });
  apiKeys.associate = (models) => {
    apiKeys.belongsTo(models.Users, {foreignKey: 'email', targetKey: 'email'});
  };
  return apiKeys;
};