const express = require("express");
const { register,login } = require("../controller/user.controllers");
const upload = require("../middleware/multi.middleware");

const router = express.Router();

router.post("/register", upload.single("avatar"), register);

router.post("/login", login);

module.exports = router;