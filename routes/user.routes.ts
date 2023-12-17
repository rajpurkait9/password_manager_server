import { Router } from "express";
import {
  CreateUser,
  DeleteUser,
  GetUserById,
  UpdateUser,
} from "../controllers/User/registerUser";

const router = Router();

router.get("/user/register", CreateUser);
router.patch("/user/update/userId", UpdateUser);
router.delete("/user/delete/userId", DeleteUser);
router.get("/user/userId", GetUserById);

export default router;
