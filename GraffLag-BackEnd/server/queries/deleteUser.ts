
import { User } from './../models/model';
import { where } from 'sequelize/types';



export function deleteUser(params:any)
{ 
    return User.destroy({where:{login:params.login,password:params.password}}).then(function (argument) { return (argument)});
}
