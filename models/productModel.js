


const Product= (sequilize, DataTypes)=>{
  const Product = sequilize.define("product",{
    title:{
        type:DataTypes.STRING,
        allowNull: false
    },
    price:{
        type:DataTypes.INTEGER,
    },
    description:{
        type: DataTypes.TEXT,
    },
    published:{
        type:DataTypes.BOOLEAN
    }
  })
  return Product
}


export default Product;

