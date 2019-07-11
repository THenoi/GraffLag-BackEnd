
import { User } from './../models/model';
import { where } from 'sequelize/types';



export function loginUser(params:any)
{ 
     return User.findAll({where: {login:params.login,password:params.password}}).then(data => data);  
}

export function loginUserId(id: number)
{
     return User.findAll({where: {userid:id}}).then(data => (data))
}