
import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
 
const dbUrl = 'postgres://postgres:Mamicuta2828@localhost:5432/GraffLag'

const sequelize: Sequelize = new Sequelize(dbUrl);

export class like extends Model {}
like.init({
             
             likeid: {
               type: DataTypes.INTEGER,
               autoIncrement: true,
               primaryKey: true
             },
             postid:{
               type: DataTypes.INTEGER,
             },
             userid:{
               type: DataTypes.INTEGER,
             }
            

},
 { 
      sequelize,
      tableName: 'like',


 });



 