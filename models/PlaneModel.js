const mongoose = require("mongoose");

const planeSchema = new mongoose.Schema({
  position: {
    type: [Number],
    required: true,
  },
  bannerUrl: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    required: true,
  },
});

const PlaneModel = mongoose.model("Plane", planeSchema);

module.exports = PlaneModel;
