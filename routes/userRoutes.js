const express = require("express");
// const  } = require("../middlewares/authMiddleware");
const {
  createUser,
  getUsers,
  getUserRole,
  updateUserRole,
  searchUsers
} = require("../controllers/userController");

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/search", searchUsers);
router.get("/:email/role", getUserRole);
router.patch("/:id/role", updateUserRole);

module.exports = router;