const { func } = require("joi");
const { models } = require("./index");

module.exports = {
  createUser: async function (body) {
    try {
      return await models.User.create({ ...body });
    } catch (error) {
      return error;
    }
  },
  getUser: async function (body) {
    try {
      const allUsers = await models.User.findAll();

      console.log("All users:", allUsers);

      return allUsers;
    } catch (err) {
      console.log(err);
    }
  },
  getAllUsers: async function () {
    try {
      return await models.User.findAll({
        attributes: { exclude: ["password", "isBlocked"] }, // Exclude the 'password' column
      });
    } catch (err) {
      console.log(err);
    }
  },
  getUserbyEmail: async function () {
    try {
      const user = await models.User.findOne({ email: email });

      if (user) {
        console.log("User found:", user);
        return user;
      } else {
        console.log("User not found.");
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  },
  updateUser: async function (body) {
    try {
      return await models.User.update(
        // condition
        { ...body },
        // to be updated to
        {
          where: {
            id: body.id,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
  deleteUser: async function (id) {
    try {
      return await models.User.destroy({ where: { id: id } });
    } catch (err) {
      console.log(err);
    }
  },
};
