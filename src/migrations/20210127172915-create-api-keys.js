'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('apiKeys', {
      id: {
        allowNull: false,
        default: Sequelize.fn('uuid_generate_v4'),
        primaryKey: true,
        type: Sequelize.UUID
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Users',
          key: 'email',
        },
      },
      key: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('apiKeys');
  }
};