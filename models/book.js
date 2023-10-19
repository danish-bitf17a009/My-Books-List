const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookSchema = new Schema({
    tittle: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true},
    links: { type: String }
},
{
     timestamp: true
});

module.exports = mongoose.model('Book',bookSchema,'books');