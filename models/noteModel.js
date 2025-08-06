const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");

const collection = () => getDB().collection("notes");

// Create a note
const createNote = async (note) => {
  return await collection().insertOne(note);
};

// Get all notes
const getAllNotes = async () => {
  return await collection().find({}).toArray();
};

// Get note by ID
const getNoteById = async (id) => {
  return await collection().findOne({ _id: new ObjectId(id) });
};

// Update note by ID
const updateNote = async (id, updatedFields) => {
  return await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedFields }
  );
};

// Delete note by ID
const deleteNote = async (id) => {
  return await collection().deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
