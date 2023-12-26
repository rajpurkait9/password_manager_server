import { Router } from "express";
import {
  createPassword,
  deletePassword,
  getAllPassword,
  updatePassword,
} from "../controllers/Password/passwordContorller";

const passwordRouter = Router();
passwordRouter.get("/password/getall", getAllPassword);
passwordRouter.post("/password/create", createPassword);
passwordRouter.put("/password/update", updatePassword);
passwordRouter.delete("/password/delete", deletePassword);

export default passwordRouter;
