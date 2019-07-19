

import {Request, Response} from 'express';
import { loginUser } from '../queries/loginUser';
import { apiGetProfileDataQuery, apiGetProfilePostsQuery } from '../queries/profile';

export function apiGetProfilePosts(req:Request, res:Response) {
    
    let profileid = parseInt(req.params.profileid);
    apiGetProfilePostsQuery(profileid)
    
   .then((data) =>res.json(data))
   .catch(()  =>  res.status(500));
         
}



