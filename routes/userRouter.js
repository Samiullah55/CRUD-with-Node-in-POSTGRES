const router = require("express").Router();

const userController = require("../controllers/userController");

router.post("/createuser", userController.createUser);
router.get("/getuser", userController.getUser);
router.delete("/deleteuser", userController.deleteUser);
module.exports = router;
