const mongoose = require('mongoose');


const switchSchema = new mongoose.Schema({
    led: {
        type: Boolean
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('switchModel', switchSchema);