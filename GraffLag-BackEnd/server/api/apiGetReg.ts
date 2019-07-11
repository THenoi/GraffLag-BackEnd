import {Request, Response} from 'express';
import { registerUser } from '../queries/registeUser';

export function apiGetReg(req:Request, res:Response) {

   console.log("register api");
   let login = req.body
   registerUser()
   
}