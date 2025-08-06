const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  updateCourseFee,
  deleteCourse,
  updateCourseStatus,
} = require("../models/courseModel");


// POST /api/courses
const createCourseHandler = async (req, res) => {
  try {
    const result = await createCourse(req.body);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send({ message: "Failed to create course" });
  }
};

// GET /api/courses
const getAllCoursesHandler = async (req, res) => {
  try {
    const { status } = req.query;
    const courses = await getAllCourses(status);
    res.send(courses);
  } catch (err) {
    console.error("Error fetching courses:", err);
    res.status(500).send({ message: "Failed to get courses" });
  }
};


// GET /api/courses/:id
const getCourseByIdHandler = async (req, res) => {
  try {
    const course = await getCourseById(req.params.id);
    if (!course) return res.status(404).send({ message: "Course not found" });
    res.send(course);
  } catch (err) {
    res.status(500).send({ message: "Failed to get course" });
  }
};


const updateCourseStatusHandler = async (req, res) => {
  const { id } = req.params;
  const { status, registrationFee } = req.body; // ✅ Add this
  
  
  try {
    const updateFields = { status };
    
    // ✅ If registrationFee is sent and valid
    if (registrationFee !== undefined) {
      updateFields.registrationFee = parseFloat(registrationFee);
    }
    console.log(updateFields);

    const result = await updateCourse(req.params.id, updateFields);
    res.send(result);
  } catch (err) {
    console.error("Update failed:", err);
    res.status(500).send({ message: "Failed to update course status" });
  }
};



// PATCH /api/courses/:id
const updateCourseHandler = async (req, res) => {
  try {
    const result = await updateCourse(req.params.id, req.body);
    res.send({ message: "Course updated", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to update course" });
  }
};

// DELETE /api/courses/:id
const deleteCourseHandler = async (req, res) => {
  try {
    const result = await deleteCourse(req.params.id);
    res.send({ message: "Course deleted", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to delete course" });
  }
};

const updateCourseFeeHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { registrationFee } = req.body;
    if (!registrationFee) {
      return res.status(400).send({ message: "Registration fee required" });
    }
    const result = await updateCourseFee(id, registrationFee);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to update fee" });
  }
};


module.exports = {
  createCourseHandler,
  getAllCoursesHandler,
  getCourseByIdHandler,
  updateCourseHandler,
  deleteCourseHandler,
  updateCourseFeeHandler,
  updateCourseStatusHandler
};
