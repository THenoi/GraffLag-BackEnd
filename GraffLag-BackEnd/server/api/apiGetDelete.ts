

import {Request, Response} from 'express';
import { loginUser } from '../queries/loginUser';
import { deleteUser } from '../queries/deleteUser';

export function apiGetDelete(req:Request, res:Response) {
    deleteUser(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}



