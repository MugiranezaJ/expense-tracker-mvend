'use strict';

module.exports = (sequelize, DataTypes) => {
  const Expenses = sequelize.define('Expenses',{
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    number: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    amount: {
      allowNull: false,
      type:DataTypes.FLOAT
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Expenses',
    onUpdate: 'CASCADE',
  });
  Expenses.associate = (models) => {
    Expenses.belongsTo(models.Categories, {foreignKey: 'categoryId', targetKey: 'id'});
  };
  return Expenses;
};