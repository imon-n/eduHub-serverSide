const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");

const collection = () => getDB().collection("materials");

// Create material
const createMaterial = async (material) => {
  return await collection().insertOne(material);
};

// Get all materials
const getAllMaterials = async () => {
  return await collection().find({}).toArray();
};

// Get material by ID
const getMaterialById = async (id) => {
  return await collection().findOne({ _id: new ObjectId(id) });
};

// Update material by ID
const updateMaterial = async (id, updatedFields) => {
  return await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedFields }
  );
};

// Delete material by ID
const deleteMaterial = async (id) => {
  return await collection().deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
  createMaterial,
  getAllMaterials,
  getMaterialById,
  updateMaterial,
  deleteMaterial,
};
