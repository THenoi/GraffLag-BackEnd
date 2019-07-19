
import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

const dbUrl = 'postgres://postgres:Mamicuta2828@localhost:5432/GraffLag'

const sequelize: Sequelize = new Sequelize(dbUrl);

export class like extends Model { }
like.init({

  likeid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userid: {
    type: DataTypes.INTEGER,
  },

  postid: {
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
    tableName: 'postlike',


  });



