//Packages import
// const express = require('express');
import express from "express";

//Components import
import connection from "./connection/db.js";

const app = express();

const PORT = 8000;

connection();

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})