
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
             login:{
               type: DataTypes.STRING,
             },
             password:{
               type: DataTypes.STRING,
             },
             email:{
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
             }
            
},
 { 
      sequelize,
      tableName: 'user',
      timestamps: true,


 });



 