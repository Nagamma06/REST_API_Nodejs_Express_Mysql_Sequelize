import db from '../models/index.js';

//create main Model

const Product = db.products
//const Review = db.reviews

//main work

//1. create prodcut

const addProduct = async(req, res)=>{
     console.log(req.body);
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
    }

    const product = await Product.create(info);
    res.status(200).send(product)
}

//2. get all products

const getAllProducts = async(req, res)=>{
    console.log(req.cookies)

   /*let products = await Product.findAll({
    attributes:['title','price']
   });*/
   let products = await Product.findAll({})
   console.log("all products=",products);
   res.status(200).send(products)
}


//3. get single product

const getOneProduct = async(req, res)=>{

  let id = req.params.id
  let products = await Product.findOne({where:{id:id}});
  res.status(200).send(products)
}

//4. update Product

const updateProduct = async(req, res)=>{
   let id = req.params.id;

   const product = await Product.update(req.body, { where: { id:id}})
   res.status(200).send(product)


}

//5. delete Product by id

const deleteProduct = async(req, res)=>{
    let id = req.params.id;

   await Product.destroy({where: { id:id}})
   res.status(200).send('product deleted successfully')
}

//6. get published product

const getPublishedProduct = async(req, res)=>{
    let id = req.params.id;
    
     const products = await Product.findAll({where: {published : true }})
     res.status(200).send(products)


   
}

export default  {
     addProduct, 
     getOneProduct, 
    getAllProducts,
    updateProduct,
    deleteProduct,
    getPublishedProduct
    }

