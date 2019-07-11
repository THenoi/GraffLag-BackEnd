import {Request, Response} from 'express';

import { loginUser, loginUserId } from '../queries/loginUser';

export function apiGetLoginId(req:Request, res:Response) {

    const id = parseInt(req.params.id);
   loginUserId(id)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
   
}