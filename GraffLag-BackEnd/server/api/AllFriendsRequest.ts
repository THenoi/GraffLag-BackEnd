import {Request, Response} from 'express';

import { getAllFriendsRequestQuery } from '../queries/friends';

export function AllFriendsRequest(req:Request, res:Response) {
    const userid = parseInt(req.params.userid)
    getAllFriendsRequestQuery(userid)
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}

