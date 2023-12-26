import { Request, Response } from "express";
import PasswordModel from "../../models/password.model";

const createPassword = async (req: Request, res: Response) => {
  try {
    const { password, website, note, userId } = req.body;
    if (!password || !userId) {
      res.status(400).json({ message: "Please provide all fields" });
      return;
    }
    const newPassword = await PasswordModel.create({
      password,
      user: userId,
      note,
      website,
    });
    res.status(201).json({ message: "Password created", data: newPassword });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const updatePassword = async (req: Request, res: Response) => {
  try {
    const { password, userId } = req.body;
    if (!password || !userId) {
      res.status(400).json({ message: "Please provide all fields" });
      return;
    }
    const newPassword = await PasswordModel.create({
      password,
      userId,
    });
    res.status(201).json({ message: "Password created", data: newPassword });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const deletePassword = async (req: Request, res: Response) => {
  try {
    const { password, userId } = req.body;
    if (!password || !userId) {
      res.status(400).json({ message: "Please provide all fields" });
      return;
    }
    const newPassword = await PasswordModel.create({
      password,
      userId,
    });
    res.status(201).json({ message: "Password created", data: newPassword });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getAllPassword = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      res.status(400).json({ message: "please provide a user id" });
      return;
    }

    const allpassword = await PasswordModel.find({ user: userId });

    res.status(200).json({ message: "Password created", data: allpassword });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { createPassword, updatePassword, deletePassword, getAllPassword };
