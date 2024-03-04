


const User= (sequilize, DataTypes)=>{
    const User = sequilize.define("user",{
      firstname:{
          type:DataTypes.STRING,
          defaultValue:null
      },
      lastname:{
        type:DataTypes.STRING,
        defaultValue:null
    },
      email:{
          type:DataTypes.STRING,
          unique:true
      },
      password:{
          type: DataTypes.STRING,
      },
      token:{
          type:DataTypes.STRING,
          defaultValue:null
      }
    })
    return User
  }
  
  
  export default User;
  
  