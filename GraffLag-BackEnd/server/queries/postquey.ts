import { IPost } from './../../../../GraffLag/src/app/interfaces/IPost';

import { User, Post } from './../models/model';


export function postupload(params: IPost) {


     const post = Post.build({
          text:params.text,
          userid:params.userid,
          privacy:params.privacy,
          authore:params.authore,
     })

     console.log(post.save().then(data => data));
     
     return post.save().then(data => data)
}

export function postupdate(params: IPost) {
     // return User.findAll({where: {userid:id}}).then(data => (data))
}


export function postdelete(params: any) {
     return Post.destroy({where: {userid:params.userid,postid:params.postid}}).then(data => (data))
}


export function userPosts(userid: number) {
     return Post.findAll({where: {userid:userid}}).then(data => (data))
}


export function news() {
     return Post.findAll({where: {privacy:"Public"}}).then(data => (data))
}