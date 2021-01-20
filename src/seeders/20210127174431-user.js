import { hashPassword } from '../utils/auth';

export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      id: '38eb202c-3f67-4eed-b7ac-9c31bc226e0c',
      email: 'testuser@gmail.com',
      password: hashPassword('testuser'),
    },

  ], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};