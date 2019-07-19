

import {Request, Response} from 'express';
import { deleteUser } from '../queries/deleteUser';
import { personalSettingQuery } from '../queries/settings';

export function apiPersonalSettings(req:Request, res:Response) {
    personalSettingQuery(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}



