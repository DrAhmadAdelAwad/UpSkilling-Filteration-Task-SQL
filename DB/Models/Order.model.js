import { DataTypes } from "sequelize";
import {sequelize} from "../connection.js";
import productModel from "./Product.model.js";


export const orderModel = sequelize.define('Order', {
    //OrderId, CustomerId, OrderDate, TotalAmount

    id : { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    productId : {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: productModel,
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'  
    },
    customerId : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    orderDate : {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue : DataTypes.NOW(),
    },
    totalAmount : {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0,
        },
    }

},{timestamps:true})

orderModel.hasMany(productModel ,{ onDelete : "CASCADE" , onUpdate : "CASCADE"})


export default orderModel;