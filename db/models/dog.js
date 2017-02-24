'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Dog = db.define('dogs', {
  name: Sequelize.STRING,
  breed: Sequelize.STRING,
  age: Sequelize.INTEGER,
  parentName: Sequelize.STRING,
  preferredPettings: Sequelize.ARRAY(Sequelize.STRING),
  okToFeed: Sequelize.TEXT,
  notes: Sequelize.TEXT,
  imageURL: Sequelize.STRING,
  floor: Sequelize.ENUM('11', '25'),
  cohort: Sequelize.STRING,
  attendance: Sequelize.ENUM('present', 'absent')
});

module.exports = Dog;
