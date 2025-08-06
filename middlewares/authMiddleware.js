const admin = require("../config/firebase");
const { getDB } = require("../config/db");

const verifyFBToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send({ message: "unauthorized access" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.decoded = decoded;
    next();
  } catch (error) {
    res.status(403).send({ message: "forbidden access" });
  }
};

const verifyRole = (requiredRole) => async (req, res, next) => {
  const email = req.decoded.email;
  const user = await getDB().collection("users").findOne({ email });
  if (!user || user.role !== requiredRole) {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};

module.exports = { verifyFBToken, verifyRole };
