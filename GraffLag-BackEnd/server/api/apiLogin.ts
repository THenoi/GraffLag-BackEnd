

import {Request, Response} from 'express';
import { loginUser } from '../queries/loginUser';

export function apiLogin(req:Request, res:Response) {
    
    loginUser(req.body)
    
   .then((data) =>res.json(data))
   .catch(()  =>  res.status(500));
         
}



