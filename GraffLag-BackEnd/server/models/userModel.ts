
import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
 
const dbUrl = 'postgres://postgres:Mamicuta2828@localhost:5432/GraffLag'

const sequelize: Sequelize = new Sequelize(dbUrl);

export class user extends Model {}
user.init({
             
             userid: {
               type: DataTypes.INTEGER,
               autoIncrement: true,
               primaryKey: true
             },
             username:{
               unique:true,
               type: DataTypes.STRING,
             },
             password:{
               type: DataTypes.STRING,
             },
             email:{
              unique:true,
               type: DataTypes.STRING,
             },
             gender:{
               type: DataTypes.STRING,
             },
             birthdate:{
               type: DataTypes.DATE,
             },
            createdAt: {
               type: DataTypes.DATE,
             },
            updatedAt: {
               type: DataTypes.DATE,
             },
             phone: {
              unique:true,
              type: DataTypes.NUMBER,
            },
            status: {
              type: DataTypes.STRING,
            },
            nickname: {
              type: DataTypes.STRING,
            },

            
},
 { 
      sequelize,
      tableName: 'user',
      timestamps: true,
      omitNull:true,


 });



 