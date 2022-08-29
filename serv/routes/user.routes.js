const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);

//user db
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.delete("/:id", userController.deleteUser);

module.exports = router;