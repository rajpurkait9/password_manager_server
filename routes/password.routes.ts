import { Router } from "express";
import {
  createPassword,
  deletePassword,
  getAllPassword,
  updatePassword,
} from "../controllers/Password/passwordContorller";

const passwordRouter = Router();
passwordRouter.get("/password", getAllPassword);
passwordRouter.post("/password", createPassword);
passwordRouter.put("/password", updatePassword);
passwordRouter.delete("/password", deletePassword);

export default passwordRouter;
