
import { IUser } from './../../../../GraffLag/src/app/interfaces/IUser';

import { User } from './../models/model';
import { Op } from 'sequelize';

export function loginUser(data:IUser)
{   
     const a = User.findOne({where:{[Op.or]: [{username: data.username}, {email: data.username}], password:data.password  }}).then((data) => data); 
     console.log(User.findOne({where:{[Op.or]: [{username: data.username}, {email: data.username}], password:data.password  }}).then((data) => data));
     return(a);
     
}


export function loginUserId(id: number)
{
     return User.findOne({where: {userid:id}}).then(data => (data))
}