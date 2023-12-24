import { NextFunction, Request, Response } from "express";
import UserModel from "../../models/User.model";

const CreateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, mobileNumber } = req.body;
    if (!name || !email || !password || !mobileNumber) {
      console.log("comming here upper");
      res.status(400).json({ message: "Please provide all fields" });
      return;
    }
    const newUser = await UserModel.create({
      name,
      email,
      password,
      phone: mobileNumber,
    });
    res.status(201).json({ message: "User created", data: newUser });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const UpdateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: "User updated" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const DeleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: "User deleted" });
  } catch (error: any) {
    console.log(error);
  }
};

const GetUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: "User found" });
  } catch (error: any) {
    // ErrorCatcher(error, req, res, next);
  }
};

const GetUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserModel.find();
    setTimeout(() => {
      res.status(200).json(users);
    }, 2000);
  } catch (error: any) {
    // ErrorCatcher(error, req, res, next);
  }
};

function sum(a: number, b: number) {
  return a + b;
}

export { CreateUser, GetUsers, sum, UpdateUser, DeleteUser, GetUserById };
