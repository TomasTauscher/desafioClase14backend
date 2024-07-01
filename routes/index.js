import { Router } from "express";
import cartsRouters from "./cartsRoutes.js";
import productsRouters from "./productsRoutes.js";
import sessionRouters from "./session.routes.js";
const router = Router();

router.use("/products", productsRouters);
router.use("/carts", cartsRouters);
router.use("/session", sessionRouters);

export default router;