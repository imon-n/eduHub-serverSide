const express = require("express");
const router = express.Router();

const {
  createRejectedHandler,
  getAllRejectedHandler,
  getRejectedByIdHandler,
  updateRejectedHandler,
  deleteRejectedHandler,
} = require("../controllers/rejectedController");

const { verifyFBToken } = require("../middlewares/authMiddleware");

router.post("/", verifyFBToken, createRejectedHandler);
router.get("/", verifyFBToken, getAllRejectedHandler);
router.get("/:id", verifyFBToken, getRejectedByIdHandler);
router.patch("/:id", verifyFBToken, updateRejectedHandler);
router.delete("/:id", verifyFBToken, deleteRejectedHandler);

module.exports = router;
