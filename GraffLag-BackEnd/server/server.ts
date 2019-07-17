

var express = require('express');


import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { initRestApi } from './api/api';

const dbUrl = 'postgres://postgres:Mamicuta2828@localhost:5432/GraffLag'
const sequelize: Sequelize = new Sequelize(dbUrl,{
    dialect: "postgres",
    port:    5432,
    define: {
      underscored: true,
      timestamps: false
    },
    sync: { force: true },
    omitNull: true
  });


sequelize.authenticate().then(() => {
    console.log('DB Connected.');
})
    .catch(err => {
        console.error('DB not connected, ', err);
})
//==========================================================================================


var bodyParser = require('body-parser')
var app = express()

// app.use(require('connect').bodyParser());

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


 initRestApi(app);

app.listen(8090, ()=>{
    console.log('localhost:8090/ is on');
})


