//const express = require('express')

import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("server is ready");
});
app.listen(5000, () => {
    console.log('server started at https://localhost:5000 ');

});













