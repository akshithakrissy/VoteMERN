const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema({
    v_name: String,
    v_id: Number,
    c_name: String,
});

const voteModel = mongoose.model('vote', voteSchema);
module.exports = voteModel;
