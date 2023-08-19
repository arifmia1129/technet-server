const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    features: [
      {
        type: String,
        required: true,
      },
    ],
    comments: [
      {
        type: String,
      },
    ],
    status: {
      type: Boolean,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.methods.logger = function () {
  console.log(`Data saved for ${this.name}`);
};

const Product = model("Product", productSchema);

module.exports = Product;
