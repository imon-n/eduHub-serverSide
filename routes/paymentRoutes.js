const express = require("express");
const router = express.Router();

const {
  createPaymentHandler,
  getAllPaymentsHandler,
  getPaymentByIdHandler,
  updatePaymentHandler,
  deletePaymentHandler,
} = require("../controllers/paymentController");

const { verifyFBToken } = require("../middlewares/authMiddleware");

router.post("/", verifyFBToken, createPaymentHandler);
router.get("/", verifyFBToken, getAllPaymentsHandler);
router.get("/:id", verifyFBToken, getPaymentByIdHandler);
router.patch("/:id", verifyFBToken, updatePaymentHandler);
router.delete("/:id", verifyFBToken, deletePaymentHandler);

module.exports = router;
