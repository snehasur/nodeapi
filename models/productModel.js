const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    Title:{
        type:String,
        required:[true,"Need product Title"],
    },
    Year: {
        type: String,
        required: [true,"Need product Year"],
    },
    imdbID: {
        type: String,
        required: [true,"Need product imdbID"],
    },
    Type: {
        type: String,
        required: [true,"Need product Type"],
    },
    Poster: {
        type: String,
        required: [true,"Need product Poster"],
    },
    Price: {
        type: String,
        required: [true,"Need product Price"],
    }  

},{
    timestamps:true,
});

module.exports =mongoose.model("product",productSchema);