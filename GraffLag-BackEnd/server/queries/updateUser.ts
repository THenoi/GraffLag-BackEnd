
import { User } from './../models/model';


export function updateUser(params: any) {

     console.log(params.passwordnew + params.login + params.password);
     return User.update
     (
          { password: params.passwordnew },
          { where: { login:params.login,password:params.password} }
     )
          .then(function (argument) { return argument });
}