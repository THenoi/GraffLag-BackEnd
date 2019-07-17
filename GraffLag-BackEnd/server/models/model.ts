

import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { user } from './userModel';
import { post } from './postModel';
import { postcomment } from './postComment';


const dbUrl = 'postgres://postgres:Mamicuta2828@localhost:5432/GraffLag'

const sequelize: Sequelize = new Sequelize(dbUrl);

export const User = user;
export const Post = post;
export const PostComment = postcomment;




