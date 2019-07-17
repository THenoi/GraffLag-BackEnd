import {Request, Response} from 'express';
import { loginUser } from '../queries/loginUser';
import { news, getPostsComments, addPostsComments } from '../queries/postquey';

export function apiAddPostComment(req:Request, res:Response) {
    const postid = parseInt(req.params.postid)
    addPostsComments(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}

