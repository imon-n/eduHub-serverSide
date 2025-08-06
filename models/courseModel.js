const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");

const collection = () => getDB().collection("courses");

// Create a course
const createCourse = async (course) => {
  return await collection().insertOne(course);
};

// Get all courses
const getAllCourses = async (status) => {
  const filter = status ? { status } : {};
  return await collection().find(filter).toArray();
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


const updateCourseFee = async (id, registrationFee) => {
  return await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: { registrationFee: parseFloat(registrationFee) } }
  );
};

const updateCourseStatus = async (id, status) => {
  const query = { _id: new ObjectId(id) };
  const updateDoc = { $set: { status } };
  return await getDB().collection("courses").updateOne(query, updateDoc);
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  updateCourseStatus,
  updateCourseFee,
};
