const { Model, DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Cart extends Model {}

Cart.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    itemsCount: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Cart",
  }
);
module.exports = Cart;
