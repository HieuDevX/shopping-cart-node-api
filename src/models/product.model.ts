import * as mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  price: Number,
  status: Boolean,
  description: String,
  image: [String],
  imageSub: String,
  keywords: [String],
  categoryId: mongoose.SchemaTypes.ObjectId
});

const product = mongoose.model("products", productSchema);

export default product;
