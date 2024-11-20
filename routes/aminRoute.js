let express = require("express");
let adminMiddlware = require("../middlware/adminMiddlware");
const authorizeUser = require("../middlware/authMiddlware");
const {
  donarListController,
  HospitalListController,
  organizationListController,
  deleteAdminController,
} = require("../controllers/adminController");
let adminRoute = express.Router();
//get-doner ||get
adminRoute.get(
  "/get-donar-list",
  authorizeUser,
  adminMiddlware,
  donarListController
);
//get-hospital ||get
adminRoute.get(
  "/get-hospital-list",
  authorizeUser,
  adminMiddlware,
  HospitalListController
);
//get-orgnazation ||get
adminRoute.get(
  "/get-organization-list",
  authorizeUser,
  adminMiddlware,
  organizationListController
);

//delete-doner/org/hospital //delete
adminRoute.delete(
  "/admin-delete/:id",
  authorizeUser,
  adminMiddlware,
  deleteAdminController
);

module.exports = adminRoute;
