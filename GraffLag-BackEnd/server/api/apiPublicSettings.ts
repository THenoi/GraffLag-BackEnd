

import {Request, Response} from 'express';
import { deleteUser } from '../queries/deleteUser';
import { publicSettingQuery } from '../queries/settings';

export function apiPublicSettings(req:Request, res:Response) {
    publicSettingQuery(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}



