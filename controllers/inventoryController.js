const userModel = require("../models/userModel");
const Inventory = require("../models/inventoryModel");
const inventoryModel = require("../models/inventoryModel");

// Create inventory
const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType, bloodGroup, quantity, organisation } =
      req.body;

    // Validation
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }
    if (inventoryType === "in" && user.role !== "donor") {
      return res
        .status(400)
        .send({ success: false, message: "Not a donor account" });
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      return res
        .status(400)
        .send({ success: false, message: "Not a hospital" });
    }

    // Save Record
    const inventory = new Inventory({
      inventoryType,
      bloodGroup,
      quantity,
      organisation,
      [inventoryType === "in" ? "donar" : "hospital"]: user._id, // Dynamically assign based on inventoryType
    });

    await inventory.save();

    return res.status(201).send({
      success: true,
      message: "New Blood Record Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Create Inventory API",
      error: error.message,
    });
  }
};

// Get All Blood records

const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        organisation: req.body.userId,
      })
      .populate("donar")
      .populate("hospital")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "Get all records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get All inventory",
      error,
    });
  }
};

module.exports = { createInventoryController, getInventoryController };
