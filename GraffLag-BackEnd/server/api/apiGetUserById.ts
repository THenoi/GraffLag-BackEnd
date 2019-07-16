import {Request, Response} from 'express';

import { loginUserId } from '../queries/loginUser';

export function apiGetUserById(req:Request, res:Response) {

    const id = parseInt(req.params.id);
   loginUserId(id)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
   
}