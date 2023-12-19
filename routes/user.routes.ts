import { Router } from "express";
import {
  CreateUser,
  DeleteUser,
  GetUserById,
  GetUsers,
  UpdateUser,
} from "../controllers/User/registerUser";

const router = Router();

router.post("/user/register", CreateUser);
router.patch("/user/update/userId", UpdateUser);
router.delete("/user/delete/userId", DeleteUser);
router.get("/user/userId", GetUserById);
router.get("/users", GetUsers);

export default router;
