const { models } = require("../models/index");

module.exports = {
  createCart: async (body) => {
    try {
      return await models.Cart.create({
        Users: {
          id: userId,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
