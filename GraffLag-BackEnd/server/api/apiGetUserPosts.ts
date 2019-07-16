

import {Request, Response} from 'express';
import { userPosts } from '../queries/postquey';

export function apiGetUserPosts(req:Request, res:Response) {


    const userid = parseInt(req.params.userid);
    userPosts(userid)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}



