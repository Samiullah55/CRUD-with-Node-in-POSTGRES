const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Employee extends Model {}

Employee.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Employees",
  }
);

module.exports = Employee;
