import {Request, Response} from 'express';
import { loginUser } from '../queries/loginUser';
import { news, getPostsComments, addPostsComments } from '../queries/postquey';
import { GetAllProfilesQuery } from '../queries/find';

export function apiGetAllProfiles(req:Request, res:Response) {
    const userid = parseInt(req.params.userid)
    GetAllProfilesQuery(userid)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}

