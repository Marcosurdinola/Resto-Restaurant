'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Categories', [
      {
          name: 'Combos',
          createdAt: new Date
      },
      {
          name: 'Viandas',
          createdAt: new Date
      },
      {
          name: 'Gourmet',
          createdAt: new Date
      },
      {
        name: 'Tartas',
         createdAt: new Date
      },
      {
        name: 'Postres',
        createdAt: new Date
      },
      {
        name: 'Rellenos',
        createdAt: new Date
      },
      {
        name: 'Sandwiches',
        createdAt: new Date
      },
      {
        name: 'Ensaladas',
        createdAt: new Date
      },
      {
        name: 'Infantiles',
        createdAt: new Date
      },
      
  ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Categories', null, {});

  }
};
