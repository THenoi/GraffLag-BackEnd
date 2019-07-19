

import {Request, Response} from 'express';
import { loginUser } from '../queries/loginUser';
import { postupload, postLikeRequest } from '../queries/postquey';

export function apiLikePost(req:Request, res:Response) {
    postLikeRequest(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
       
}



