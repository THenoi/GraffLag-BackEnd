
import {Application} from "express";
import { apiGetLogin } from "./apiGetLogin";
import { apiGetReg } from "./apiGetReg";
import { apiGetLoginId } from "./apiGetLoginId";
import bodyParser = require("body-parser");



export function initRestApi(app:Application) {

    app.route('/api/reg').post(apiGetReg);
    app.route('/api/login').post(apiGetLogin);
    app.route('/api/login/:id').post(apiGetLoginId)
}