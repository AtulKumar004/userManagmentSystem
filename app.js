require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() =>{
    app.listen(5000, () => console.log("Connected and listening on Port 5000"))
}
).catch((err) => console.log(err));

