import {Request, Response} from 'express';
import { loginUser } from '../queries/loginUser';
import { news, getPostsComments } from '../queries/postquey';

export function apiGetPostComments(req:Request, res:Response) {
    const postid = parseInt(req.params.postid)
    getPostsComments(postid)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}

