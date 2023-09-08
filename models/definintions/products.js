const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Products extends Model {}

Products.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    productName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    size: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    color: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    availibility: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Products",
  }
);
module.exports = Products;
