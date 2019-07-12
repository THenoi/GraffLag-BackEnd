import {Request, Response} from 'express';
import { registerUser } from '../queries/registeUser';

export function apiGetReg(req:Request, res:Response) {

   
   registerUser(req.body)

         
   
}