const {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
} = require("../models/paymentModel");

// POST /api/payments
const createPaymentHandler = async (req, res) => {
  try {
    const result = await createPayment(req.body);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send({ message: "Failed to create payment" });
  }
};

// GET /api/payments
const getAllPaymentsHandler = async (req, res) => {
  try {
    const payments = await getAllPayments();
    res.send(payments);
  } catch (err) {
    res.status(500).send({ message: "Failed to get payments" });
  }
};

// GET /api/payments/:id
const getPaymentByIdHandler = async (req, res) => {
  try {
    const payment = await getPaymentById(req.params.id);
    if (!payment) return res.status(404).send({ message: "Payment not found" });
    res.send(payment);
  } catch (err) {
    res.status(500).send({ message: "Failed to get payment" });
  }
};

// PATCH /api/payments/:id
const updatePaymentHandler = async (req, res) => {
  try {
    const result = await updatePayment(req.params.id, req.body);
    res.send({ message: "Payment updated", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to update payment" });
  }
};

// DELETE /api/payments/:id
const deletePaymentHandler = async (req, res) => {
  try {
    const result = await deletePayment(req.params.id);
    res.send({ message: "Payment deleted", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to delete payment" });
  }
};

module.exports = {
  createPaymentHandler,
  getAllPaymentsHandler,
  getPaymentByIdHandler,
  updatePaymentHandler,
  deletePaymentHandler,
};
