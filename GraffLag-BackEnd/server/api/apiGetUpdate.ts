

import {Request, Response} from 'express';
import { loginUser } from '../queries/loginUser';
import { updateUser } from '../queries/updateUser';

export function apigetUpdate(req:Request, res:Response) {
    updateUser(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}



