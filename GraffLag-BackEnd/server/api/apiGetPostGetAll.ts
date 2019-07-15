

import {Request, Response} from 'express';
import { loginUser } from '../queries/loginUser';
import { postupload, postgetall } from '../queries/postquey';

export function apiGetPostGetAll(req:Request, res:Response) {
    postgetall(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}



