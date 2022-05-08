var assert = require('assert')
require("dotenv").config();
const DiseaseNode = require("../Schema/disease_node");
const fs = require('fs')
var json = require('./data.json');
// const config = require('data.json')
var mongoose = require('mongoose');

// make a connection 
mongoose.connect('mongodb+srv://anyone:anyonemonkey@cluster0.9x4mo.mongodb.net/All?retryWrites=true&w=majority');

// get reference to database
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("Connection Successful!");
    const jsonString = fs.readFileSync('./data.json')
    const myData = JSON.parse(jsonString)
    DiseaseNode.collection.insertMany(json, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            console.log("Multiple documents inserted to Collection");
        }
    });

})
db.close()