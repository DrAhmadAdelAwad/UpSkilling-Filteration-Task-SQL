import { DataTypes } from "sequelize";
import {sequelize} from "../connection.js";
 
export const productModel = sequelize.define('Product', {
    //ProductId, Name, Description, Price, Stock
    id : { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name : {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    description : {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    price : {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    stock : {
        type: DataTypes.INTEGER,
        validate: {
            min: 0,
        },
    }

},{timestamps:true})


export default productModel;