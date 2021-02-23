const {
  createUser,
  getUserByUserId,
  getUsers,
  deleteUser,
  updateUsers,
  login,
} = require("./user.controller");
const router = require("express").Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserByUserId);
router.patch("/", updateUsers);
router.delete("/", deleteUser);
router.post("/login", login);

module.exports = router;
