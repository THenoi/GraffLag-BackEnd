

import {Request, Response} from 'express';
import { like } from '../queries/postquey';

export function apiLike(req:Request, res:Response) {
    
    like(req.body)
//    .then(data =>  res.json(data))
//    .catch(()  =>  res.status(500));
         
}



