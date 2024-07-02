import mongoose from "mongoose";

const urlDb =  "mongodb+srv://admin:tomastauscher@e-commerce.pgblped.mongodb.net/ecommerce";

export const connectMongoDB = async () => {
<<<<<<< HEAD
    try{
        mongoose.connect(urlDb);
        console.log("Mongo DB Conectado");
    }catch(error){
        console.log(error)
    }
}
=======
  try {
    mongoose.connect(urlDb);
    console.log("Mongo DB Conectado");
  } catch (error) {
    console.log(error);
  }
};
>>>>>>> 7d0c390b05f1d3be5c357818f3ddbaeef6c9cae9
