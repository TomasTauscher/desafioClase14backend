import { Router } from "express";
import productDao from "../dao/mongoDao/product.dao.js";


const router = Router()


router.get("/", async (req, res) => {
    
    try{
        //const {limit} = req.query;
        const products = await productDao.getAll()

        res.status(200).json({status: "success", payload: products})

        
    }
    catch (error) {
    console.log(error)
    }
})

router.get("/:pid", async (req, res) => {

    try{  
        const {pid} = req.params
        const product = await productDao.getById(pid)
        res.status(200).json({status: "success", payload: product})

    }catch (error) {
        console.log(error)
    }
})


router.post ("/", async (req, res) => {

    try{

        const product = req.body

        const newProduct = await productDao.create(product)

        res.status(200).json({status: "success", payload: newProduct})

    }catch(error){
        console.log(error)
    }
})

router.put ("/:pid", async (req, res) => {

    try{
        const {pid} = req.params
        const product = req.body

        const updateProduct = await productManager.updateProduct(pid, product)

        res.status(201).json(updateProduct)

    }catch(error){
        console.log(error)
    }
})

router.delete ("/:pid", async (req, res) => {

    try{
        const {pid} = req.params

        await productManager.deleteProduct(pid)

        res.status(201).json({message: "Producto eliminado"})

    }catch(error){
        console.log(error)
    }
})




export default router;