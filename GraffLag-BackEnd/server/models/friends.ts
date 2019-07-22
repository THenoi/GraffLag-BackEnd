
import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
 
const dbUrl = 'postgres://postgres:Mamicuta2828@localhost:5432/GraffLag'

const sequelize: Sequelize = new Sequelize(dbUrl);

export class friends extends Model {}
friends.init({
             
             friendsid: {
               type: DataTypes.INTEGER,
               autoIncrement: true,
               primaryKey: true
             },
             atid:{
               type: DataTypes.INTEGER,
             },
            
             toid:{
              type: DataTypes.INTEGER,
            },
             createdAt:{
              type: DataTypes.DATE,
            },
            updatedAt:{
              type: DataTypes.DATE,
            },

            

},
 { 
      sequelize,
      tableName: 'friends',


 });



 