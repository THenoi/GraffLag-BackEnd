
import { User } from './../models/model';

export function registerUser( login?: string,password?:string,email?:string,gender?:string,birthdate?:Date) {

    let insertuser = User.build({
        login: login,
        password: password,
        email: email,
        gender: gender,
        birthdate: birthdate
    })
     insertuser.save();

}
