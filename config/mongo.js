const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;
    await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(x => {
            console.log(`Connected to MongoDB! DB name "${x.connections[0].name}"`);
        })
        .catch(err => {
            console.error('Error conneting to MongoDB', err);
        })

        return mongoose;
}

module.exports = { dbConnect }