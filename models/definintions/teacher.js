const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../bin/dbConnection");

class Teacher extends Model {}

Teacher.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fullname: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    designition: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Teachers",
  }
);

module.exports = Teacher;
