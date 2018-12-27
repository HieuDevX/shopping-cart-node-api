import * as mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  status: String,
  description: String,
  image: [String],
  cate_id: mongoose.SchemaTypes.ObjectId
});

const product = mongoose.model("Products", productSchema);

export default product;
