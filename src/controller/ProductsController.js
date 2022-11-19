const ProductsModel = require("../model/ProductsModel")

//Create Products
exports.CreateProduct=(req,res)=>{
    let reqBody= req.body;
    ProductsModel.create(reqBody,(err,data)=>{
        if (err) {
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


//Read Products
exports.FindProduct=(req,res)=>{
    let Qurey = {}
    let Projection = "ProductName Img ProductCode UnitPrice TotalPrice  Qty";
    ProductsModel.find(Qurey,Projection,(err,data)=>{
        if (err) {
            res.status(400).json({status:"fail",data:err})
            
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}
//Read Products By Id
exports.ReadProductById=(req,res)=>{
    let id=req.params.id;
    let Query = {_id:id}
    let Projection = "ProductName Img ProductCode UnitPrice TotalPrice  Qty";
    ProductsModel.find(Query,Projection,(err,data)=>{
        if (err) {
            res.status(400).json({status:"fail",data:err})
            
        }
        else{
            res.status(200).json({status:"success",data:data})
        }

    })

}


//Update Products
exports.UpdateProduct=(req,res)=>{
    let id = req.params.id;
    let Query = {_id:id};
    let reqBody = req.body;
    ProductsModel.updateMany(Query,reqBody,(err,data)=>{
        if (err) {
            res.status(400).json({status:"fail",data:err})
            
        }
        else{
            res.status(200).json({status:"success",data:data})
        }

    })
}


//Delete Products

exports.DeleteProduct=(req,res)=>{
    let id=req.params.id;
    let Query = {_id:id};
    ProductsModel.deleteOne(Query,(err,data)=>{
        if (err) {
            res.status(400).json({status:"fail",data:err})
            
        }
        else{
            res.status(200).json({status:"success",data:data})
        }

    })
}