//Packages import
// const express = require('express');
import express from "express";

//Components import
import connection from "./connection/db.js";
import DefaultData from "./default.js";
import Route from "color-convert/route.js";

const app = express();

app.use('/', Route);

const PORT = 8000;

connection();

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

DefaultData();