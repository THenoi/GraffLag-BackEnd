import { Post } from './../models/model';

import { User } from '../models/model';
import { where } from 'sequelize/types';



export function apiGetProfileDataQuery(userid:number)
{   
    return User.findOne({where:{userid:userid}}).then((data)=>data);
}
export function apiGetProfilePostsQuery(userid:number)
{   
    return Post.findAll({where:{userid:userid}}).then((data)=>data);
}
