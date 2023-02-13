const productCrl = {};

const Product = require('../models/product');


try{

    productCrl.getProduct = async (req, res) => {
        const products = await Product.find();
        res.json(products);
    }

    productCrl.postProduct = async (req, res) =>{
        const {title, description, price, image} = req.body
        const newProduct = new Product({
            title, 
            description,
            price,
            image
        })
        await newProduct.save()
        res.json({ status: "product saved"})
    }

    productCrl.putProduct = async (req, res) =>{
        const {title, description, price, image} = req.body
        const newProduct = {title, description, price, image}
        await Product.findByIdAndUpdate(req.params.id, newProduct)
        res.json({ status: "product updated"})
    }

    productCrl.delateProduct = async (req, res) =>{
        await Product.findByIdAndRemove(req.params.id)
    }

    productCrl.findProduct = async (req, res) =>{
        product = await Product.findById(req.params.id)
        res.json(product)
    
    }
}catch{(err) => console.log(err)}


module.exports = productCrl;