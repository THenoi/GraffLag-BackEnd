
import {Application} from "express";
import { apiGetLogin } from "./apiGetLogin";
import { apiGetReg } from "./apiGetReg";
import { apiGetLoginId } from "./apiGetLoginId";

import { apiGetDelete } from "./apiGetDelete";
import { apigetUpdate } from "./apiGetUpdate";
import { apiGetPostu } from "./apiGetPostu";
import { apiGetPostup } from "./apiGetPostup";
import { apiGetPostd } from "./apiGetPostd";
import { apiGetPostGetAll } from "./apiGetPostGetAll";
import { apiGetNews } from "./apiGetNews";



export function initRestApi(app:Application) {

    app.route('/api/reg').post(apiGetReg);
    app.route('/api/login').post(apiGetLogin);
    app.route('/api/login/:id').post(apiGetLoginId);
    app.route('/api/delete').post(apiGetDelete);
    app.route('/api/update').post(apigetUpdate);
    app.route('/api/postu').post(apiGetPostu);
    app.route('/api/postup').post(apiGetPostup);
    app.route('/api/postd').post(apiGetPostd);
    app.route('/api/postgetall').post(apiGetPostGetAll);
    app.route('/api/news').post(apiGetNews);
    
}