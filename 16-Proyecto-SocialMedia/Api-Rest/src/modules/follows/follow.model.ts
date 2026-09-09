import { Schema, model, Document, Types } from "mongoose";

export interface IFollow extends Document {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  followed: Types.ObjectId;
  created_at: Date;
}

const FollowSchema = new Schema<IFollow>(
  {
    user: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
    },
    followed: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    // Con esto Mongoose maneja "created_at" y "updated_at" automáticamente
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  },
);

export const Follow = model<IFollow>("Follow", FollowSchema);
