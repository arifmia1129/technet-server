const Product = require("../models/Product.js");

module.exports.getAllProductsService = async (filters, queries) => {
  const result = await Product.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);

  const total = await Product.countDocuments(filters);
  const pages = Math.ceil(total / queries.limit);
  return { result, total, pages };
};

module.exports.createNewProductService = async (product) => {
  const result = await Product.create(product);
  return result;
};

module.exports.getProductByIdService = async (id) => {
  const result = await Product.findById(id);
  return result;
};

module.exports.updateProductService = async (productId, data) => {
  const result = await Product.updateOne({ _id: productId }, data, {
    runValidators: true,
  });

  return result;
};

module.exports.deleteProductService = async (id) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};
