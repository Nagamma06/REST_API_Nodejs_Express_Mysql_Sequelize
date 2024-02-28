//import dbConfig from '../config/dbConfig.js';
import config from 'dotenv'
import { Sequelize,DataTypes} from 'sequelize';

import Product from './productModel.js';
import Review from './reviewModel.js';

config.config();

// const sequelize = new Sequelize(
//        dbConfig.DB,
//        dbConfig.USER,
//        dbConfig.PASSWORD,
//             { host:dbConfig.HOST,
//             dialect:dbConfig.dialect,
//             operatorAliases:false, //all error of this application are overwritted using aliases.
//             pool : {
//                 max:dbConfig.pool.max,
//                 min:dbConfig.pool.min,
//                 acquire:dbConfig.pool.acquire,
//                 idel: dbConfig.pool.idle
//             }
//         }
//     );

    const sequelize = new Sequelize(
        process.env.DB,
        process.env.USER,
        process.env.PASSWORD,
             { host:process.env.HOST,
             dialect:process.env.dialect,
             operatorAliases:false, //all error of this application are overwritted using aliases.
             pool : {
                 max:5,
                 min:0,
                 acquire:30000,
                 idel: 10000
             }
         }
     );
 
    sequelize.authenticate()
    .then(()=>{
        console.log("DB connected..")
    }).catch((err)=>{
        console.log('Error',err)
    })

    const db = {}

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    db.products = Product(sequelize,DataTypes)
    db.reviews = Review(sequelize,DataTypes)

    db.sequelize.sync({force:false})
    .then(()=>{
        console.log('Yes re-sync done!')
    })


    export default db;



