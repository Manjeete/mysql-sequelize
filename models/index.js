const {Sequelize,DataTypes} = require('sequelize')
const dbConfig = require("../config/dbConfig");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:'mysql',
        pool:{
            max:5,
            min:0,
            idle:10000
        }
    }

);

sequelize.authenticate()
.then(() =>{
    console.log("Database connected...")
})
.catch(err =>{
    console.log("Error:"+err)
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users")(sequelize,DataTypes)

db.sequelize.sync()
.then(() =>{
    console.log("Yes re-sync done!")
})
.catch(err =>{
    console.log("ERROR: "+err)
})