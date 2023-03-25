const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
var cors = require('cors');
require('dotenv').config();


const app = express();
const mongoString = process.env.DATABASE_URL
const database = mongoose.connection

app.use(express.json());
//enables cors
app.use(cors({
  'allowedHeaders': '*',
  'exposedHeaders': '*',
  'origin': '*',
  'methods': '*',
  'preflightContinue': false
}));

mongoose.connect(mongoString);
app.use('/api', routes)
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
// Your code
/*if (process.env.NODE_ENV === "production") {
    const path = require("path");
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'myapp', 'build', 'index.html'),function (err) {
            if(err) {
                res.status(500).send(err)
            }
        });
    })
}*/
// Your code

app.listen(process.env.PORT || 8000, (port) => {
    console.log(`Server Started at ${port}`)
})