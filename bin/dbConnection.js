const config = require("../config.json");
const sequelize = require("sequelize");

const database = new sequelize(config.db);

database
  .authenticate()
  .then(() => {
    console.log("database connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = database;
