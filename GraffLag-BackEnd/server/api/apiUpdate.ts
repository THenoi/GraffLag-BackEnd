

import {Request, Response} from 'express';
import { updateUser } from '../queries/updateUser';

export function apiUpdate(req:Request, res:Response) {
    updateUser(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}



