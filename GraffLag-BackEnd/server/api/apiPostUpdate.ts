

import {Request, Response} from 'express';
import { postupdate } from '../queries/postquey';

export function apiPostUpdate(req:Request, res:Response) {
    postupdate(req.body)
//    .then(data =>  res.json(data))
//    .catch(()  =>  res.status(500));
         
}



