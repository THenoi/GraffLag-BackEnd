

import {Request, Response} from 'express';
import { loginUser } from '../queries/loginUser';
import { postupload, postupdate } from '../queries/postquey';

export function apiGetPostup(req:Request, res:Response) {
    postupdate(req.body)
//    .then(data =>  res.json(data))
//    .catch(()  =>  res.status(500));
         
}



