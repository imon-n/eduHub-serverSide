const express = require("express");
const router = express.Router();

const {
  createCourseHandler,
  getAllCoursesHandler,
  getCourseByIdHandler,
  updateCourseHandler,
  deleteCourseHandler,
  updateCourseStatusHandler,
  updateCourseFeeHandler
} = require("../controllers/courseController");

const { verifyFBToken } = require("../middlewares/authMiddleware");

router.post("/", verifyFBToken, createCourseHandler);
router.get("/", getAllCoursesHandler);
router.get("/:id", getCourseByIdHandler);
router.patch("/:id", verifyFBToken, updateCourseHandler);
router.patch("/:id/fee", updateCourseFeeHandler);
router.patch("/:id/status", updateCourseStatusHandler);
router.delete("/:id", verifyFBToken, deleteCourseHandler);

module.exports = router;
