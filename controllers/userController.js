const { models } = require("../models/index");
const service = require("../services/userService");
const joi = require("joi");

const createUserSchema = joi.object({
  fname: joi.string().required().min(4).max(30),
  lname: joi.string().required().min(4).max(30),
  email: joi.string().email().required(),
  password: joi.string().required(),
});
const getUserSchema = joi.object({
  id: joi.number().required(),
  fname: joi.string().required().min(4).max(30),
  lname: joi.string().required().min(4).max(30),
  email: joi.string().email().required(),
  password: joi.string().required(),
});
const getUserByEmail = joi.object({
  email: joi.string().email().required(),
});
const deleteUser = joi.object({
  id: joi.number().required(),
});
const updateUserSchema = joi.object({
  id: joi.number().required(),
  fname: joi.string().required().min(4).max(30),
  lname: joi.string().required().min(4).max(30),
  email: joi.string().email().required(),
  password: joi.string().required(),
});
module.exports = {
  createUser: async (req, res) => {
    try {
      // validating schema

      const validate = await createUserSchema.validateAsync(req.body);

      if (validate.error) {
        res.status(400).send(validate.error);
      }
      const response = await service.createUser(validate);
      // console.log(response);
      res.status(200).json(response);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getUser: async (req, res) => {
    try {
      // validating schema

      const validate = await getUserSchema.validateAsync(req.body);

      if (validate.error) {
        res.status(400).send(validate.error);
      }
      const response = await service.getUser(validate);
      // console.log(response);
      res.status(200).json(response);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getAllUsers: async function (req, res) {
    try {
      const response = await models.getAllUsers();
      if (response) {
        return response;
      }
      return "No such user exits";
    } catch (err) {
      console.log(err.message);
    }
  },
  updateUser: async function () {
    try {
    } catch (err) {
      console.log(err.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      // validating schema

      const validate = await deleteUser.validateAsync(req.body);
      console.log(validate);
      if (validate.error) {
        res.status(400).send(validate.error);
      }
      const response = await service.deleteUser(validate.id);
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      res.status(404).send(error);
    }
  },
};
