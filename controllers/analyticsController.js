const mongoose = require("mongoose");
const inventoryModel = require("../models/inventoryModel");

let analyticsController = async (req, res, next) => {
  try {
    const bloods = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"];
    let bloodGroupData = [];
    let userId = new mongoose.Types.ObjectId(req.userId);
    //get single blood group
    await Promise.all(
      bloods.map(async (blood) => {
        //count total in
        const totalIn = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup: blood,
              inventoryType: "in",
              organization: userId,
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$quantity" },
            },
          },
        ]);
        //count total out
        const totalOut = await inventoryModel.aggregate([
          {
            $match: {
              organization: userId,
              inventoryType: "out",
              bloodGroup: blood,
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$quantity" },
            },
          },
        ]);
        //calculate blood
        const availableBlood =
          (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0);
        //push data
        bloodGroupData.push({
          bloodGroup: blood,
          totalIn: totalIn[0]?.total,
          totalOut: totalOut[0]?.total,
          availableBlood,
        });
      })
    );

    res.status(200).send({
      message: "Fetched Blood for Analytics",
      bloodGroupData,
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Somthing wrong while fetching the data",
      success: false,
      err,
    });
  }
};
module.exports = { analyticsController };
