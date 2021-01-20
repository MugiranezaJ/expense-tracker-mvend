'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        id:'0ce36391-2c08-3074-bddb-a4ea8cccbbc5',
        name: 'Electronics', 
      },
    ], {});

    const categories = await queryInterface.sequelize.query(
      'SELECT id FROM Categories;'
    );

    const categoryRows = categories[0];

    return await queryInterface.bulkInsert('Expenses', [
      {
        id:'83b2a3e7-9ba4-3f4d-b3a3-d31940ee2edc',
        name: 'Computer', 
        number: '14', 
        amount: '500000',
        categoryId:'0ce36391-2c08-3074-bddb-a4ea8cccbbc5'
      },
      {
        id:'83b2a3e7-4ab9-3f4d-b3a3-d31940ee2edc',
        name: 'Radio', 
        number: '30', 
        amount: '500000',
        categoryId:'0ce36391-2c08-3074-bddb-a4ea8cccbbc5'
      },
      {
        id: '1a52f79e-568a-45b3-9151-4dfa40bb1217',
        name: 'Television', 
        number: '5', 
        amount: '300000',
        categoryId:'0ce36391-2c08-3074-bddb-a4ea8cccbbc5'
      },
      {
        id: 'aeebcf33-d125-44ce-b8c1-f5d5e8b75f13',
        name: 'Telephone', 
        number: '12', 
        amount: '800000',
        categoryId:'0ce36391-2c08-3074-bddb-a4ea8cccbbc5'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Expenses', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  }
};