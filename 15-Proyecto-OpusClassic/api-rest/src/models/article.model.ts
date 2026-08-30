import { Schema, model, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  content: string;
  date: Date;
  imagen: string;
}

const ArticleSchema = new Schema<IArticle>({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 150,
  },
  content: {
    type: String,
    required: true,
    trim: true,
    minlength: 20,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  imagen: {
    type: String,
    default: "default.png",
  },
});

export const Article = model<IArticle>("Article", ArticleSchema);