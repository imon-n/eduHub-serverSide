const {
  createMaterial,
  getAllMaterials,
  getMaterialById,
  updateMaterial,
  deleteMaterial,
} = require("../models/materialModel");

// POST /api/materials
const createMaterialHandler = async (req, res) => {
  try {
    const result = await createMaterial(req.body);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send({ message: "Failed to create material" });
  }
};

// GET /api/materials
const getAllMaterialsHandler = async (req, res) => {
  try {
    const materials = await getAllMaterials();
    res.send(materials);
  } catch (err) {
    res.status(500).send({ message: "Failed to get materials" });
  }
};

// GET /api/materials/:id
const getMaterialByIdHandler = async (req, res) => {
  try {
    const material = await getMaterialById(req.params.id);
    if (!material) return res.status(404).send({ message: "Material not found" });
    res.send(material);
  } catch (err) {
    res.status(500).send({ message: "Failed to get material" });
  }
};

// PATCH /api/materials/:id
const updateMaterialHandler = async (req, res) => {
  try {
    const result = await updateMaterial(req.params.id, req.body);
    res.send({ message: "Material updated", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to update material" });
  }
};

// DELETE /api/materials/:id
const deleteMaterialHandler = async (req, res) => {
  try {
    const result = await deleteMaterial(req.params.id);
    res.send({ message: "Material deleted", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to delete material" });
  }
};

module.exports = {
  createMaterialHandler,
  getAllMaterialsHandler,
  getMaterialByIdHandler,
  updateMaterialHandler,
  deleteMaterialHandler,
};
