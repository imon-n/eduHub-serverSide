const express = require("express");
const router = express.Router();

const {
  createMaterialHandler,
  getAllMaterialsHandler,
  getMaterialByIdHandler,
  updateMaterialHandler,
  deleteMaterialHandler,
} = require("../controllers/materialController");

const { verifyFBToken } = require("../middlewares/authMiddleware");

router.post("/", verifyFBToken, createMaterialHandler);
router.get("/", getAllMaterialsHandler);
router.get("/:id", getMaterialByIdHandler);
router.patch("/:id", verifyFBToken, updateMaterialHandler);
router.delete("/:id", verifyFBToken, deleteMaterialHandler);

module.exports = router;
