const { registerUser, authUser } = require("../controller/userController");

const router = require("express").Router();

router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
