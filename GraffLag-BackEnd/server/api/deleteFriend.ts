import {Request, Response} from 'express';

import { getAllFriendsRequestQuery, deleteFriendQuery } from '../queries/friends';

export function deleteFriend(req:Request, res:Response) {
    
    deleteFriendQuery(req.body)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}

