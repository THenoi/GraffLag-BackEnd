
import { User, Post } from './../models/model';


export function postupload(params: any) {

     const post = Post.build({
          text:params.text,
          userid:params.userid,
          privacy:params.privacy,
          authore:params.authore,
     })

     
     return post.save().then(data => data)
}

export function postupdate(params: any) {
     // return User.findAll({where: {userid:id}}).then(data => (data))
}

export function postdelete(params: any) {
     // return User.findAll({where: {userid:id}}).then(data => (data))
}
export function postgetall(params: any) {
     return Post.findAll({where: {userid:params.userid,authore:params.authore}}).then(data => (data))
}
export function news() {
     return Post.findAll({where: {privacy:"Public"}}).then(data => (data))
}