
import { User } from './../models/model';

export function registerUser(params: any) {


    return User.findOrCreate({
        where: { login: params.login},
        defaults: {
            login: params.login,
            password: params.password,
            email: params.email,
            gender: params.gender,
            birthdate: params.birthdata,
            status: "",
            phone: params.phone,
            nickname: params.nickname,
        }
    },
    ).then(data => data)
    
    
}

