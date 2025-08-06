const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");

const collection = () => getDB().collection("courses");

// Create a course
const createCourse = async (course) => {
  return await collection().insertOne(course);
};

// Get all courses
const getAllCourses = async () => {
  return await collection().find({}).toArray();
};

// Get course by ID
const getCourseById = async (id) => {
  return await collection().findOne({ _id: new ObjectId(id) });
};

// Update course by ID
const updateCourse = async (id, updatedFields) => {
  return await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedFields }
  );
};

// Delete course by ID
const deleteCourse = async (id) => {
  return await collection().deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
