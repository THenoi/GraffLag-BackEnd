

import {Request, Response} from 'express';
import { deletePostComment } from '../queries/postquey';


export function apiDeletePostComment(req:Request, res:Response) {
    deletePostComment(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}



