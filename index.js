//Packages import
// const express = require('express');
import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";

//Components import
import connection from "./connection/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
app.use('/', Route);

const PORT = 8000;

connection();

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

DefaultData();