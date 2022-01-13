module.exports = (sequelize,DataTypes) =>{
    const Users = sequelize.define("users",{
        name:DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
        },
        gender:{
            type:DataTypes.STRING
        }
    })
}