const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    ProductName: { type: String },
    ProductCode: { type: Number },
    Img: { type: String },
    UnitPrice: { type: Number },
     Qty:{type:String},
    TotalPrice: { type: Number },
    CreateDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const ProductsModel = mongoose.model("products", DataSchema);
module.exports = ProductsModel;
