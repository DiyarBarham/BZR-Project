const mongoose = require("mongoose");
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
mongoose.connect("mongodb://localhost/residence", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));