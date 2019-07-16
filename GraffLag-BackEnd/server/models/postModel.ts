
import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
 
const dbUrl = 'postgres://postgres:Mamicuta2828@localhost:5432/GraffLag'

const sequelize: Sequelize = new Sequelize(dbUrl);

export class post extends Model {}
post.init({
             
             postid: {
               type: DataTypes.INTEGER,
               autoIncrement: true,
               primaryKey: true
             },
             text:{
               type: DataTypes.STRING,
             },
             userid:{
               type: DataTypes.NUMBER,
             },
             privacy:{
               type: DataTypes.STRING,
             },
             likes:{
               type: DataTypes.NUMBER,
             },
             createdAt:{
              type: DataTypes.DATE,
            },
            updatedAt:{
              type: DataTypes.DATE,
            },
            authore:{
              type :DataTypes.STRING
            }
       

},
 { 
      sequelize,
      tableName: 'post',
      timestamps: true,


 });



 