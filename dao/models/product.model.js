import mongoose from "mongoose";
<<<<<<< HEAD
import mongoosePaginate from "mongoose-paginate-v2"
=======
import mongoosePaginate from "mongoose-paginate-v2";
>>>>>>> 7d0c390b05f1d3be5c357818f3ddbaeef6c9cae9

const productCollection = "products";

const productSchema = new mongoose.Schema({
<<<<<<< HEAD
    title:{
        type: String,
        require: true
    },
    descritpion: {
        type: String,
        require: true
    },
    thumbnail: {
        type: Array,
        default: []
    },
    code: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true
    }
    
})

productSchema.plugin(mongoosePaginate)

export const productModel = mongoose.model(productCollection, productSchema)
=======
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  thumbnail: {
    type: Array,
    default: [],
  },
  code: {
    type: String,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  price: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true
  }
});

productSchema.plugin(mongoosePaginate);

export const productModel = mongoose.model(productCollection, productSchema);
>>>>>>> 7d0c390b05f1d3be5c357818f3ddbaeef6c9cae9
