
import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
 
const dbUrl = 'postgres://postgres:Mamicuta2828@localhost:5432/GraffLag'

const sequelize: Sequelize = new Sequelize(dbUrl);

export class postcomment extends Model {}
postcomment.init({
             
             commentid: {
               type: DataTypes.INTEGER,
               autoIncrement: true,
               primaryKey: true
             },
             userid:{
               type: DataTypes.INTEGER,
             },
            
            postid:{
              type: DataTypes.INTEGER,
            },
             comment:{
               type: DataTypes.STRING,
             },
             createdAt:{
              type: DataTypes.DATE,
            },
            updatedAt:{
              type: DataTypes.DATE,
            },
            authore:{
              type: DataTypes.STRING,
            }
            

},
 { 
      sequelize,
      tableName: 'postcomment',


 });



 