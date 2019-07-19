
import { IUser } from './../../../../GraffLag/src/app/interfaces/IUser';

import { User } from './../models/model';
import { Op } from 'sequelize';

export function publicSettingQuery(params: IUser) {

     let oldparams: IUser;
     oldparams = <IUser>User.findAll({ where: { userid: params.userid } }).then((data) => data);

     return User.update(
          {
               nickname: params.nickname!= null ?params.nickname : oldparams.nickname,
               status: params.status!= null ?params.status : oldparams.status,
          }, { where: { userid: params.userid, phone: params.phone } })

}


export function personalSettingQuery(params: IUser) {
     let oldparams: IUser;
     oldparams = <IUser>User.findAll({ where: { userid: params.userid } }).then((data) => data);

     return User.update(
          {
               username: params.username != null ? params.username : oldparams.username,
               password: params.password != null ? params.password : oldparams.password,
               email: params.email != null ? params.email : oldparams.email,
               birthdate: params.birthdate != null ? params.birthdate : oldparams.birthdate,
          }, { where: { userid: params.userid, phone: params.phone } }).then(data => data);
}