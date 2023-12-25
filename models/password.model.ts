import { Schema, model } from "mongoose";

const PasswordSchema = new Schema<IPasswordDocument>(
  {
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    website: String,
    note: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const PasswordModel = model<IPasswordDocument>("Password", PasswordSchema);

export default PasswordModel;

interface IPasswordDocument extends Document {
  password: string;
  website: string;
  note: string;
  user: Object;
}
