import mongoose from "mongoose";

export default function connectMongo(uri: string) {
  if (!uri) {
    throw new Error("Please provide MongoDB URI");
  }
  mongoose
    .connect(uri)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}
