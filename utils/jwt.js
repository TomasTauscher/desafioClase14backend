<<<<<<< HEAD
import jwt from "jsonwebtoken"

export const createToken = (user) => {
    const { _id, email, role } = user
    const token = jwt.sign( { _id, email, role }, "codigoSecreto", {expiresIn: "1m"})
    return token
}


export const verifyToken = (token) => {
    try{
        const decode = jwt.verify(token, "codigoSecreto")
    return decode
    } catch (error) {
        return null
    }
}
=======
import jwt from "jsonwebtoken";

export const createToken = (user) => {
  const { _id, email, role } = user;
  const token = jwt.sign({ _id, email, role }, "codigoSecreto", { expiresIn: "1m" });
  return token;
};

export const verifyToken = (token) => {
  try {
    const decode = jwt.verify(token, "codigoSecreto");
    return decode;
  } catch (error) {
    return null;
  }
};
>>>>>>> 7d0c390b05f1d3be5c357818f3ddbaeef6c9cae9
