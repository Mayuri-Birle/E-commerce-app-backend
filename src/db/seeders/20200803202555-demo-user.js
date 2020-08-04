'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        id: "2bcf1da2-058c-4154-87ef-bde6f4b41c1c",
        name: "Brad",

        email: "brad@carlisle.com",
        password: "$2a$10$SRA8F2QC.Vnsx5N97whEi.nmT1Rz88Bg8rZdTtcegp4WywT9RHT6y",
        passwordConfirm: "$2a$10$SRA8F2QC.Vnsx5N97whEi.nmT1Rz88Bg8rZdTtcegp4WywT9RHT6y"
      },
      {
        id: "d4ace71e-a3a8-4144-9b42-82bc2dfdaf11",
        name: "Mike",
        email: "mike@gmail.com",
        password: "$2a$10$QohRiClPJgBWWZjb1KLNx.vwrjVRmnlipSOo9nWNfTs9FrfBpp69y",
        passwordConfirm: "$2a$10$QohRiClPJgBWWZjb1KLNx.vwrjVRmnlipSOo9nWNfTs9FrfBpp69y"
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});

  }
}