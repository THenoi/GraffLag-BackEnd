
import { User } from './../models/model';

export function registerUser( params:any) {
    
    const insertuser = User.build({
        login: params.login,
        password: params.password,
        email: params.email,
        gender: params.gender,
        birthdate: params.birthdata,
        status: "",
        phone: params.phone,
    })
    console.log(params);

     insertuser.save().then(data => data)

    
}
