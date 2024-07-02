<<<<<<< HEAD
import bcrypt from "bcrypt"

export const createHash = (password) => {
    return bcrypt.hashSync( password, bcrypt.genSaltSync(10) )
}


export const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password)
} 


=======
import bcrypt from "bcrypt";

export const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

export const isValidPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};
>>>>>>> 7d0c390b05f1d3be5c357818f3ddbaeef6c9cae9
