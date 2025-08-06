const {
  createRejected,
  getAllRejected,
  getRejectedById,
  updateRejected,
  deleteRejected,
} = require("../models/rejectedModel");

// POST /api/rejected
const createRejectedHandler = async (req, res) => {
  try {
    const result = await createRejected(req.body);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send({ message: "Failed to create rejected entry" });
  }
};

// GET /api/rejected
const getAllRejectedHandler = async (req, res) => {
  try {
    const entries = await getAllRejected();
    res.send(entries);
  } catch (err) {
    res.status(500).send({ message: "Failed to get rejected entries" });
  }
};

// GET /api/rejected/:id
const getRejectedByIdHandler = async (req, res) => {
  try {
    const entry = await getRejectedById(req.params.id);
    if (!entry) return res.status(404).send({ message: "Entry not found" });
    res.send(entry);
  } catch (err) {
    res.status(500).send({ message: "Failed to get rejected entry" });
  }
};

// PATCH /api/rejected/:id
const updateRejectedHandler = async (req, res) => {
  try {
    const result = await updateRejected(req.params.id, req.body);
    res.send({ message: "Rejected entry updated", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to update rejected entry" });
  }
};

// DELETE /api/rejected/:id
const deleteRejectedHandler = async (req, res) => {
  try {
    const result = await deleteRejected(req.params.id);
    res.send({ message: "Rejected entry deleted", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to delete rejected entry" });
  }
};

module.exports = {
  createRejectedHandler,
  getAllRejectedHandler,
  getRejectedByIdHandler,
  updateRejectedHandler,
  deleteRejectedHandler,
};
