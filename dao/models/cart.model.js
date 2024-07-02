import mongoose from "mongoose";

const cartCollection = "carts";

const cartSchema = new mongoose.Schema({
<<<<<<< HEAD
    products: {
        type: [ { product: {type: mongoose.Schema.Types.ObjectId, ref: "products"}, quantity: Number }]
    }
})

cartSchema.pre("find", function(){
    this.populate("products.product")
})


export const cartModel = mongoose.model(cartCollection, cartSchema) 
=======
  products: {
    type: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: "products" }, quantity: Number }],
  },
});

cartSchema.pre("find", function () {
  this.populate("products.product");
});

export const cartModel = mongoose.model(cartCollection, cartSchema);
>>>>>>> 7d0c390b05f1d3be5c357818f3ddbaeef6c9cae9
