import { IUser } from './../../../../GraffLag/src/app/interfaces/IUser';

import { User } from './../models/model';


export function loginUser(data:IUser)
{    
      

     return User.findOne({where:{username:data.username,password:data.password}}).then((data) => data);
     
      
}


export function loginUserId(id: number)
{
     return User.findOne({where: {userid:id}}).then(data => (data))
}