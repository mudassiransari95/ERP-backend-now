const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: false,
    },
  
}, { timestamps: true });

module.exports = mongoose.model('Auth', authSchema);