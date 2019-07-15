

import {Request, Response} from 'express';
import { loginUser } from '../queries/loginUser';
import { postupload } from '../queries/postquey';

export function apiGetPostu(req:Request, res:Response) {
    postupload(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}



