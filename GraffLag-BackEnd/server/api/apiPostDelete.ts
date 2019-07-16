

import {Request, Response} from 'express';
import { postdelete } from '../queries/postquey';

export function apiPostDelete(req:Request, res:Response) {

    postdelete(req.body)
        
   .then((data) =>res.json(data))
   .catch(()  =>  res.status(500));
         
}



