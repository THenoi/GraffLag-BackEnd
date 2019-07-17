
import {Application} from "express";

import { apiLogin } from "./apiLogin";
import { apiRegister } from "./apiRegister";
import { apiGetUserById } from "./apiGetUserById";

import { apiDelete } from "./apiDelete";
import { apiUpdate } from "./apiUpdate";
import { apiGetPostUpload } from "./apiGetPostUpload";
import { apiPostUpdate } from "./apiPostUpdate";
import { apiGetUserPosts } from "./apiGetUserPosts";
import { apiGetNews } from "./apiGetNews";
import { apiPostDelete } from "./apiPostDelete";

import { apiAddPostComment } from "./apiAddPostComment";
import { apiGetPostComments } from "./apiGetPostComments";



export function initRestApi(app:Application) {

    app.route('/api/reg').post(apiRegister);
    app.route('/api/login').post(apiLogin);
    app.route('/api/delete').post(apiDelete);
    app.route('/api/update').post(apiUpdate);
    
    app.route('/api/postupload').post(apiGetPostUpload);
    app.route('/api/postupdate').post(apiPostUpdate);
    app.route('/api/postdelete').post(apiPostDelete);

    app.route('/api/news/comment').post(apiAddPostComment);

    app.route('/api/login/:id').get(apiGetUserById);
    app.route('/api/user/:userid/posts').get(apiGetUserPosts);
    app.route('/api/news').get(apiGetNews);
    app.route('/api/news/:postid/post').get(apiGetPostComments);


    
    
}