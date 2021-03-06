import * as mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  price: Number,
  image: String
});

const category = mongoose.model("categories", categorySchema);

export default category;
