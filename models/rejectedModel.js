const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");

const collection = () => getDB().collection("rejected");

// Create rejected entry
const createRejected = async (entry) => {
  return await collection().insertOne(entry);
};

// Get all rejected entries
const getAllRejected = async () => {
  return await collection().find({}).toArray();
};

// Get rejected entry by ID
const getRejectedById = async (id) => {
  return await collection().findOne({ _id: new ObjectId(id) });
};

// Update rejected entry by ID
const updateRejected = async (id, updatedFields) => {
  return await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedFields }
  );
};

// Delete rejected entry by ID
const deleteRejected = async (id) => {
  return await collection().deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
  createRejected,
  getAllRejected,
  getRejectedById,
  updateRejected,
  deleteRejected,
};
