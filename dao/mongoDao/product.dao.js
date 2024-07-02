import { productModel } from "../models/product.model.js";

const getAll = async (query, options) => {
<<<<<<< HEAD
    const products = await productModel.paginate(query, options);
    return products;
}

const getById = async (id) => {
    const product = await productModel.findById(id);
    return product
}

const create = async (data) => {
    const product = await productModel.create(data);
    return product;
}

const update = async (id, data) => {
    await productModel.findByIdAndUpdate(id, data);
    const product = await productModel.findById(id);
    return product;
}

const deleteOne = async (id) => {
    const product = await productModel.deleteOne({_id: id});
    if(product.deletedCount === 0) return false;
    return true;
}

export default{
    getAll,
    getById,
    create,
    update,
    deleteOne
}
=======
  const products = await productModel.paginate(query, options);
  return products;
};

const getById = async (id) => {
  const product = await productModel.findById(id);
  return product;
};

const create = async (data) => {
  const product = await productModel.create(data);
  return product;
};

const update = async (id, data) => {
  await productModel.findByIdAndUpdate(id, data);
  const product = await productModel.findById(id);
  return product;
};

const deleteOne = async (id) => {
  const product = await productModel.deleteOne({ _id: id });
  if (product.deletedCount === 0) return false;
  return true;
};

export default {
  getAll,
  getById,
  create,
  update,
  deleteOne,
};
>>>>>>> 7d0c390b05f1d3be5c357818f3ddbaeef6c9cae9
