import { NextFunction, Request, Response } from "express";
import { ErrorCatcher, ErrorHandlers } from "../../Error/ErrorCatcher";

const CreateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(201).json({ message: "User created" });
  } catch (error: any) {
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
    ErrorCatcher(error, req, res, next);
  }
};

const GetUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: "User found" });
  } catch (error: any) {
    ErrorCatcher(error, req, res, next);
  }
};

function sum(a: number, b: number) {
  return a + b;
}

export { CreateUser, sum, UpdateUser, DeleteUser, GetUserById };
