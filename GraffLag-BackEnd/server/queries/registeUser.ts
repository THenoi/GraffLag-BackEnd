
import { User } from './../models/model';

export function registerUser( params:any) {
    
    const insertuser = User.build({
        login: params.login,
        password: params.password,
        email: params.email,
        gender: params.gender,
        birthdate: params.birthdate,
        phone:params.phone
    })

     insertuser.save().then(data => data)

    
}
