import { IUser } from './../../../../GraffLag/src/app/interfaces/IUser';

import { User } from './../models/model';

import { Op } from 'sequelize';
export function registerUser(params: IUser) {

        return User.findOrCreate({
            where: { [Op.or]: [{username: params.username}, {email: params.email}, {phone:params.phone}]},
            defaults: {
                username: params.username,
                password: params.password,
                email: params.email,
                gender: params.gender,
                birthdate: params.birthdate,
                phone: params.phone,
                nickname: params.nickname,
            }
          }).then(data => data)



    
}

