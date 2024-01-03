const express = require("express");
const process = require("node:process");

const app = express();



app.listen(process.env.PORT ?? 8080, () => {
    console.log(`Server started on localhost:${process.env.PORT ?? 8080}`)
});