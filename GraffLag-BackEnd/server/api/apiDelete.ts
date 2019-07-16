

import {Request, Response} from 'express';
import { deleteUser } from '../queries/deleteUser';

export function apiDelete(req:Request, res:Response) {
    deleteUser(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}



