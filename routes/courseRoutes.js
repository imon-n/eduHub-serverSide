const express = require("express");
const router = express.Router();

const {
  createCourseHandler,
  getAllCoursesHandler,
  getCourseByIdHandler,
  updateCourseHandler,
  deleteCourseHandler,
} = require("../controllers/courseController");

const { verifyFBToken } = require("../middlewares/authMiddleware");

router.post("/", verifyFBToken, createCourseHandler);
router.get("/", getAllCoursesHandler);
router.get("/:id", getCourseByIdHandler);
router.patch("/:id", verifyFBToken, updateCourseHandler);
router.delete("/:id", verifyFBToken, deleteCourseHandler);

module.exports = router;
