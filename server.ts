import express, { Application } from "express";
import { config } from "dotenv";
import router from "./routes/user.routes";

const app: Application = express();
config();

// middlewares
app.use(express.json());

// routes
app.use("/api/v1", router);


// server start code
const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();
