const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PlaneModel = require("./models/PlaneModel");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/node_mongodb_backend")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.get("/planes", async (req, res) => {
  try {
    const planes = await PlaneModel.find();
    res.json(planes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/planes", async (req, res) => {
  try {
    const { position, bannerUrl, url } = req.body;
    const plane = new PlaneModel({ position, bannerUrl, url });

    const newPlane = await plane.save();
    res.status(201).json(newPlane);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
