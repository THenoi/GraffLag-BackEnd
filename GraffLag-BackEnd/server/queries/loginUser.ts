
import { User } from './../models/model';

import {Md5} from 'ts-md5/dist/md5';


export function loginUser(params:any)
{    
    
     return User.findAll({where:{login:params.login,password:params.password}}).then((data) => data);
   
}

export function loginUserId(id: number)
{
     return User.findAll({where: {userid:id}}).then(data => (data))
}