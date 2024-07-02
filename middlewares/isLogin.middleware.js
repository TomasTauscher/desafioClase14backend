<<<<<<< HEAD
import { request, response } from "express"


export const isLogin = async (req = request, res = response, next) => {

    if(req.session.user) {
        next()
    } else {
        res.status(401).json({ status: "Error", msg: "Usuario no logueado"})
    }

=======
import { request, response } from "express";

export const isLogin = async (req = request, res = response, next) => {

  if(req.session.user) {
    next();
  } else {
    res.status(401).json({ status: "Error", msg: "Usuario no logueado"});
  }
  
>>>>>>> 7d0c390b05f1d3be5c357818f3ddbaeef6c9cae9
}