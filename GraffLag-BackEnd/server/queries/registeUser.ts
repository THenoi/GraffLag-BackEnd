import { IUser } from './../../../../GraffLag/src/app/interfaces/IUser';

import { User } from './../models/model';

export function registerUser(params: IUser) {



        return User.findOrCreate({
            where: {username: params.username, email: params.email},
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

