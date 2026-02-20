//Load env variables
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectedDB = require("./config/dbConnect.js");
const userRouter = require("./routes/userRoutes.js");

//Middleware
const app = express();

//Initialize app
const PORT = process.env.PORT || 5000;

// Routes
app.use("/api/users", userRouter);

// Start the server
const startServer = async () => {
  await connectedDB(); // ensures DB is connected first
  app.listen(PORT, () =>
    console.log(`Server is running http://localhost:${PORT}`),
  );
};

startServer();
