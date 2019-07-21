
import {Application} from "express";

import { apiLogin } from "./apiLogin";
import { apiRegister } from "./apiRegister";
import { apiGetUserById } from "./apiGetUserById";

import { apiDelete } from "./apiDelete";
import { apiUpdate } from "./apiUpdate";
import {  apiPostUpload } from "./apiPostUpload";
import { apiPostUpdate } from "./apiPostUpdate";
import { apiGetUserPosts } from "./apiGetUserPosts";
import { apiGetNews } from "./apiGetNews";
import { apiPostDelete } from "./apiPostDelete";

import { apiGetPostComments } from "./apiGetPostComments";
import { apiPublicSettings } from "./apiPublicSettings";
import { apiPersonalSettings } from "./apiPersonalSettings";
import { apiLikePost } from "./apiLikePost";
import { apiDeletePostComment } from "./apiDeletePostComment";
import { apiAddPostComment } from "./apiAddPostComment";
import { apiGetAllProfiles } from "./apiGetAllProfiles";
import { apiGetProfileData } from "./apiGetProfileData";
import { apiGetProfilePosts } from "./apiGetProfilePosts";



export function initRestApi(app:Application) {

    app.route('/api/reg').post(apiRegister);
    app.route('/api/login').post(apiLogin);
    app.route('/api/delete').post(apiDelete);
    app.route('/api/update').post(apiUpdate);
    
    app.route('/api/postupload').post(apiPostUpload); 
    app.route('/api/postupdate').post(apiPostUpdate);
    app.route('/api/postdelete').post(apiPostDelete);

    app.route('/api/news/post/add/comment').post(apiAddPostComment);

    app.route('/api/login/:id').get(apiGetUserById);
    app.route('/api/user/:userid/posts').get(apiGetUserPosts);
    app.route('/api/news').get(apiGetNews);
    app.route('/api/news/posts/get/:postid/comments').get(apiGetPostComments);
    app.route('/api/find/:userid/getAllUsers').get(apiGetAllProfiles);


    app.route('/api/publicSettings').post(apiPublicSettings); // change public settings
    app.route('/api/personalSettings').post(apiPersonalSettings); // change personal settings

    app.route('/api/news/post/like').post(apiLikePost); 
    app.route('/api/news/post/delete/comment').post(apiDeletePostComment); 
    app.route('/api/profile/:profileid').get(apiGetProfileData);
    app.route('/api/profile/:profileid/posts').get(apiGetProfilePosts);



    
    
}