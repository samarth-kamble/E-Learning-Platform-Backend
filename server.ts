import { app } from "./app";
import connectDB from "./utils/db";
require("dotenv").config();

// Create a Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  connectDB();
});
