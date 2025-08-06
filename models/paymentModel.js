const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");

const collection = () => getDB().collection("payments");

// Create payment record
const createPayment = async (payment) => {
  return await collection().insertOne(payment);
};

// Get all payments
const getAllPayments = async () => {
  return await collection().find({}).toArray();
};

// Get payment by ID
const getPaymentById = async (id) => {
  return await collection().findOne({ _id: new ObjectId(id) });
};

// Update payment by ID
const updatePayment = async (id, updatedFields) => {
  return await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedFields }
  );
};

// Delete payment by ID
const deletePayment = async (id) => {
  return await collection().deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};
