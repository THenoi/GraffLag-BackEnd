
import { User } from '../models/model';
import { where } from 'sequelize/types';
import { Op } from 'sequelize';


export function GetAllProfilesQuery(userid:number)
{   
    console.log(User.findAll({where : {[Op.ne]: {userid:userid} }}).then((data)=>data));
    
    return User.findAll({where : {[Op.ne]: {userid:userid} }}).then((data)=>data);
}
