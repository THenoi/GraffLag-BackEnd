
import {Application} from "express";
import { apiGetLogin } from "./apiGetLogin";
import { apiGetReg } from "./apiGetReg";
import { apiGetLoginId } from "./apiGetLoginId";
import bodyParser = require("body-parser");
import { apiGetDelete } from "./apiGetDelete";
import { apigetUpdate } from "./apiGetUpdate";



export function initRestApi(app:Application) {

    app.route('/api/reg').post(apiGetReg);
    app.route('/api/login').post(apiGetLogin);
    app.route('/api/login/:id').post(apiGetLoginId);
    app.route('/api/delete').post(apiGetDelete);
    app.route('/api/update').post(apigetUpdate);
}