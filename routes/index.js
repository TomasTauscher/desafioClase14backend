import { Router } from "express";
<<<<<<< HEAD
import productsRouters from "./productsRoutes.js"
import cartsRouters from "./cartsRoutes.js"
import sessionRouters from "./session.routes.js"
import { isLogin } from "../middlewares/isLogin.middleware.js"

const router = Router()


router.use("/products", productsRouters)
router.use("/carts", cartsRouters)
router.use("/session", sessionRouters)



=======
import cartsRouters from "./cartsRoutes.js";
import productsRouters from "./productsRoutes.js";
import sessionRouters from "./session.routes.js";
const router = Router();

router.use("/products", productsRouters);
router.use("/carts", cartsRouters);
router.use("/session", sessionRouters);
>>>>>>> 7d0c390b05f1d3be5c357818f3ddbaeef6c9cae9

export default router;