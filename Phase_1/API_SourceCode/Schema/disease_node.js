// importing mongoose
const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
    Country: String,
    City: String,
}, { _id: true });

const ReportSchema = new mongoose.Schema({
    locations: [LocationSchema],
    diseases: [String],
}, { _id: true });

const DiseaseNode = mongoose.Schema({
    url: String,
    date_of_publication: Date,
    headline: String,
    main_text: String,
    reports: [ReportSchema],
}, { _id: true });

// exporting our module for external usage (in other files)
module.exports = mongoose.model("DiseaseNode", DiseaseNode);
