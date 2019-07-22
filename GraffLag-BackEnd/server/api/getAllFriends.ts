import {Request, Response} from 'express';

import { getAllFriendsRequestQuery, getAllFriendsQuery } from '../queries/friends';

export function getAllFriends(req:Request, res:Response) {
    const userid = parseInt(req.params.userid)
    getAllFriendsQuery(userid)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}

