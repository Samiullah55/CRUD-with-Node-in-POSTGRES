const sequelize = require("../bin/dbConnection");
const User = require("./definintions/user");
const Employee = require("./definintions/employee");
const Students = require("./definintions/students");
const Teacher = require("./definintions/teacher");
const Cart = require("./definintions/cart");
const Role = require("./definintions/role");
const Products = require("./definintions/products");
const CartHasProducts = require("./definintions/cartHasProducts");
// importing models
// relations here
User.hasOne(Cart, { foreignKey: "userId" });
Cart.belongsTo(User, { foreignKey: { name: "userId", allowNull: false } });

Role.hasMany(User, { foreignKey: "roleID" });
User.belongsTo(Role, { foreignKey: { name: "roleID", allowNull: false } });

Products.belongsToMany(Cart, { through: "CartHasItems" });
Cart.belongsToMany(Products, { through: "CartHasItems" });

Cart.hasMany(CartHasProducts, {
  foreignKey: { name: "cartId", allowNull: false },
});
CartHasProducts.belongsTo(Cart, {
  foreignKey: { name: "cartId", allowNull: false },
});
//model array
const models = {
  User,
  Employee,
  Students,
  Teacher,
  Cart,
  Role,
  Products,
  CartHasProducts,
};
const db = {};
db.sequelize = sequelize;
sequelize.models = models;
module.exports = { db, models };
