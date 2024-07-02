import { request, response } from "express";
import passport from "passport";

export const passportCall = (strategy) => {
<<<<<<< HEAD
    return async (req = request, res = response, next) => {
        passport.authenticate(strategy, { session: false }, (error, user, info) => {
            if (error) return next(error);
            if (!user) return res.status(401).json({ status: "error", msg: info.message ? info.message : info.toString() });

        req.user = user;

        next();
        })(req, res, next);
    };
};

export const authorization = (role) => {

    return async (req = request, res = response, next) => {
=======
  return async (req = request, res = response, next) => {
    passport.authenticate(strategy, { session: false }, (error, user, info) => {
      if (error) return next(error);
      if (!user) return res.status(401).json({ status: "error", msg: info.message ? info.message : info.toString() });

      req.user = user;

      next();
    })(req, res, next);
  };
};

export const authorization = (role) => {
  
  return async (req = request, res = response, next) => {
>>>>>>> 7d0c390b05f1d3be5c357818f3ddbaeef6c9cae9

    if(!req.user) return res.status(401).json({status: "error", msg: "No autorizado"});
    if(req.user.role !== role) return res.status(403).json({status: "error", msg: "No tienes permiso"});
    
    next();
<<<<<<< HEAD
    }
=======
  }
>>>>>>> 7d0c390b05f1d3be5c357818f3ddbaeef6c9cae9
}