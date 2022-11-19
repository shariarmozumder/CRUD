const express = require("express");
const ProductsController = require("../controller/ProductsController")
const router = express.Router();

//Create Api

router.post("/CreateProduct",ProductsController.CreateProduct)

//Find Product
router.get("/FindProduct",ProductsController.FindProduct)
//Find By Id
router.get("/ReadProductById/:id",ProductsController.ReadProductById)
//Update Product
router.post("/UpdateProduct/:id",ProductsController.UpdateProduct)
//Delete Product
router.get("/DeleteProduct/:id",ProductsController.DeleteProduct)



module.exports = router;