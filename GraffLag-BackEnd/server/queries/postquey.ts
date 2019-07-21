import { IPost, IPostComment } from './../../../../GraffLag/src/app/interfaces/IPost';


import { Post, PostComment, Like } from './../models/model';

export function postupload(params: IPost) {
    
      return Post.create({
          text:params.text,
          userid:params.userid,
          privacy:params.privacy,
          authore:params.authore,
     }).then(data => data)

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

export function getPostsComments(postid:number) {

     return PostComment.findAll({ where: {postid:postid}}).then(data => data)
}

export function addPostsComments(params: IPostComment) {

     
    return PostComment.create({
         postid:params.postid,
         userid:params.userid,
         comment:params.comment,
         authore:params.authore,
     }).then((data) => data)

 
}

export function postLikeRequest(params: IPost) {
    
     return Like.create({
         userid:params.userid,
         postid:params.postid,
    }).then(data => data)

}
export function deletePostComment(params: IPostComment) {
    
     return PostComment.destroy({where :{commentid:params.commentid,userid:params.userid,postid:params.postid}}).then(data => data)

}
