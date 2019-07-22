import {Request, Response} from 'express';

import {  AcceptFriendRequestQuery } from '../queries/friends';

export function AcceptFriendRequest(req:Request, res:Response) {
    
    
    AcceptFriendRequestQuery(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}

