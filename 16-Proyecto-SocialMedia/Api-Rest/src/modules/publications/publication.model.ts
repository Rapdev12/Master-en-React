import { Schema, model, Document, Types } from "mongoose";

export interface IPublication extends Document {
  _id: Types.ObjectId;
  description?: string;
  file?: string []; // opcional, no todos suben foto;
  created_at: Date;
  user: Types.ObjectId;
}

const PublicationSchema = new Schema<IPublication>(
  {
    description: {
      type: String,
      default: null,
    },
    user: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
    },

    file: {
      type: [String],
      default: [],
    },
  },
  {
    // Con esto Mongoose maneja "created_at" y "updated_at" automáticamente
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  },
);
export const Publication = model<IPublication>(
  "Publication",
  PublicationSchema,
);
