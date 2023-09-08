const { func } = require("joi");
const userModel = require("../models/userModel");
const model = require("../models/userModel");
const bcrypt = require("bcrypt");
const cartModel = require("../models/cartModel");
module.exports = {
  createUser: async function (body) {
    try {
      const saltRounds = 10;
      body.password = await bcrypt.hash(body.password, saltRounds);
      const response = model.createUser(body);
      console.log(response);
      if (response) {
        delete response.dataValues.password;
        const cart = await cartModel.createCart(response.dataValues.id);
        console.log("Cart", cart);
        if (cart) {
          return {
            user: response,
            cart: cart,
          };
        }
      } else {
        return "user not found";
      }
    } catch (error) {
      return error;
    }
  },

  getUser: async function () {
    try {
      const response = await userModel.getUser();
      if (response) {
        return response;
      }
      return "No such user exits";
    } catch (err) {
      console.log(err);
    }
  },
  getUserByEmail: async function (email) {
    try {
      const response = await userModel.getUserByEmail(email);
      if (response) {
        return response;
      }
      return "no such User exists";
    } catch (err) {
      console.log(err);
    }
  },
  updateUser: async function (body) {
    try {
      // const user=await
    } catch (err) {
      console.log(err);
    }
  },
  deleteUser: async function (id) {
    try {
      const response = await userModel.deleteUser(id);
      if (response) {
        return response;
      }
      return "no such id";
    } catch (err) {
      console.log(err);
    }
  },
};
