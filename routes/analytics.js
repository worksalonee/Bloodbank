let express = require("express");
const authorizeUser = require("../middlware/authMiddlware");
const { analyticsController } = require("../controllers/analyticsController");
let analyticsRoute = express.Router();
analyticsRoute.get("/analytics", authorizeUser, analyticsController);
module.exports = analyticsRoute;
