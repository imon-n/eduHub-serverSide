const express = require("express");
const router = express.Router();

const {
  createNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  updateNoteHandler,
  deleteNoteHandler,
} = require("../controllers/noteController");

const { verifyFBToken } = require("../middlewares/authMiddleware");

router.post("/", verifyFBToken, createNoteHandler);
router.get("/", getAllNotesHandler);
router.get("/:id", getNoteByIdHandler);
router.patch("/:id", verifyFBToken, updateNoteHandler);
router.delete("/:id", verifyFBToken, deleteNoteHandler);

module.exports = router;
