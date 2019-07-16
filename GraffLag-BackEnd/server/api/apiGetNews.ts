import {Request, Response} from 'express';
import { loginUser } from '../queries/loginUser';
import { news } from '../queries/postquey';

export function apiGetNews(req:Request, res:Response) {
    news()
   .then(data =>  res.json(data))
   .catch(()  =>  res.status(500));
         
}

