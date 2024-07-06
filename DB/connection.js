import { Sequelize } from "sequelize";
export const sequelize = new Sequelize("Upskilling" , "root" , "" , {
    host: "localhost",
    dialect: "mysql",
})
export const connectDB = async()=>{
    return await sequelize.sync({alter:false , force : false}).then(result=>{
        console.log("DB Connected Successfully");
    }).catch(err=>{
        console.error("Error Connecting to DB",err);
    });
}
