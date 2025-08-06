const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");
const { MongoClient, ServerApiVersion } = require("mongodb");

const createUser = async (req, res) => {
  const email = req.body.email;
  const users = getDB().collection("users");
  const userExists = await users.findOne({ email });
  if (userExists) {
    return res.status(200).send({ message: "User already exists", inserted: false });
  }
  const result = await users.insertOne(req.body);
  res.send(result);
};

const getUsers = async (req, res) => {
  const users = await getDB().collection("users").find({ role: "tutor" }).toArray();
  res.send(users);
};

const getUserRole = async (req, res) => {
  const user = await getDB().collection("users").findOne({ email: req.params.email });
  if (!user) return res.status(404).send({ message: "User not found" });
  res.send({ role: user.role || "user" });
};

const updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  if (!["admin", "user", "tutor"].includes(role)) {
    return res.status(400).send({ message: "Invalid role" });
  }
  const result = await getDB().collection("users").updateOne(
    { _id: new ObjectId(id) },
    { $set: { role } }
  );
  res.send({ message: `User role updated to ${role}`, result });
};

const searchUsers = async (req, res) => {
  const emailQuery = req.query.email;
  const regex = new RegExp(emailQuery, "i");
  const users = await getDB().collection("users").find({ email: { $regex: regex } }).limit(50).toArray();
  res.send(users);
};

module.exports = {
  createUser,
  getUsers,
  getUserRole,
  updateUserRole,
  searchUsers
};
