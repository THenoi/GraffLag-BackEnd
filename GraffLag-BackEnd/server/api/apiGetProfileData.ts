

import {Request, Response} from 'express';
import { loginUser } from '../queries/loginUser';
import { apiGetProfileDataQuery } from '../queries/profile';

export function apiGetProfileData(req:Request, res:Response) {
    
    let profileid = parseInt(req.params.profileid);
    apiGetProfileDataQuery(profileid)
    
   .then((data) =>res.json(data))
   .catch(()  =>  res.status(500));
         
}



