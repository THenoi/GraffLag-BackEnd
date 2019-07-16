import {Request, Response} from 'express';
import { registerUser } from '../queries/registeUser';

export function apiRegister(req:Request, res:Response) {

   
   registerUser(req.body).then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
   

         
   
}