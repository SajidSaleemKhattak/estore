const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ Import CORS
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(cors({ origin: "*" })); // Allow all origins (you can restrict later to your frontend domain)
app.use(express.json()); // Parse JSON request bodies

// ✅ Routes
app.use("/api/products", productRoutes);

// ✅ Connect DB & Start Server
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(
        `🚀 Server running on http://localhost:${process.env.PORT || 5000}`
      )
    );
  })
  .catch((err) => console.error(err));
