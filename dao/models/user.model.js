import mongoose from "mongoose";

const userCollection = "user";

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
    first_name: String,
    last_name: String,
          //me da error poner email: {type: String, unique: true}
    email: {
        type: String,
        unique: true,
    },
    password: String,
    age: Number,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})

export const userModel = mongoose.model(userCollection, userSchema) 
=======
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  age: Number,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

export const userModel = mongoose.model(userCollection, userSchema);
>>>>>>> 7d0c390b05f1d3be5c357818f3ddbaeef6c9cae9
