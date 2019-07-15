
import { User, Post } from './../models/model';
import { where } from 'sequelize/types';



export function deleteUser(params:any)
{   
    return Post.destroy({where:{postid:params.postid,userid:params.userid,authore:params.authore}}).then(function (argument) { return (argument)});
}
