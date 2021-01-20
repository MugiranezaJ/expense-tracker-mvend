'use strict';

export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('apiKeys', [
    {
      id: '38eb202c-3f67-4eed-b7ac-9c31bc226e0c',
      email: 'testuser@gmail.com',
      key: 'IuhIdTqYfs',
    },

  ], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('apiKeys', null, {})
};