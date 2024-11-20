const userModel = require("../models/userModel");
let adminMiddlware = async (req, res, next) => {
  try {
    let userId = req.userId;
    let user = await userModel.find({ _id: userId });
    if (!(user[0].role === "admin"))
      return res
        .status(401)
        .send({ message: "Unauthorized User", success: false });
    next();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "somthing wrong !", success: false, error });
  }
};
module.exports = adminMiddlware;
