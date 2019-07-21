
import { User } from '../models/model';
import { where } from 'sequelize/types';
import { Op } from 'sequelize';


export function GetAllProfilesQuery(data:number)
{   
    return User.findAll({where :  {userid: {[Op.ne]: data}} }).then((data)=>data);
}
