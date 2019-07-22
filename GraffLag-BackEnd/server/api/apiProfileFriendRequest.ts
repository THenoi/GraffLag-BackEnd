import {Request, Response} from 'express'
import { apiProfileFriendRequest } from '../queries/profile';


export function apiProfileFriend(req:Request, res:Response) {
    
    apiProfileFriendRequest(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}

