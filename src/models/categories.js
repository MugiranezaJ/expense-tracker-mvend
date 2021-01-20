'use strict';

module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories',{
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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Categories',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });
  return Categories;
};