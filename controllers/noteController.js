const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../models/noteModel");

// POST /api/notes
const createNoteHandler = async (req, res) => {
  try {
    const result = await createNote(req.body);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send({ message: "Failed to create note" });
  }
};

// GET /api/notes
const getAllNotesHandler = async (req, res) => {
  try {
    const notes = await getAllNotes();
    res.send(notes);
  } catch (err) {
    res.status(500).send({ message: "Failed to get notes" });
  }
};

// GET /api/notes/:id
const getNoteByIdHandler = async (req, res) => {
  try {
    const note = await getNoteById(req.params.id);
    if (!note) return res.status(404).send({ message: "Note not found" });
    res.send(note);
  } catch (err) {
    res.status(500).send({ message: "Failed to get note" });
  }
};

// PATCH /api/notes/:id
const updateNoteHandler = async (req, res) => {
  try {
    const result = await updateNote(req.params.id, req.body);
    res.send({ message: "Note updated", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to update note" });
  }
};

// DELETE /api/notes/:id
const deleteNoteHandler = async (req, res) => {
  try {
    const result = await deleteNote(req.params.id);
    res.send({ message: "Note deleted", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to delete note" });
  }
};

module.exports = {
  createNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  updateNoteHandler,
  deleteNoteHandler,
};
