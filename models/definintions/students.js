const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Students extends Model {}

Students.init(
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
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bloodGroup: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Students",
  }
);
