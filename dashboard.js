const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 7000;
const HOST = process.env.HOST || 'localhost';
const DB = process.env.MONGO_URL;

app.use(express.json());

// this route will be removed
app.use('/', (req,res) => {
    res.json({ message: 'Server running!' });
});

const init = () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose
            .connect(DB, { useNewUrlParser:true, useUnifiedTopology:true }, (error) => {
                if(error) throw error;
                console.log('Connected to DB'); 
            });
        app.listen(PORT, HOST, (error) => {
            if(error) throw error;
            console.log(`Server running on port ${PORT}...`);
        });
    } catch(error) {
        if(error) console.log(error);

    }
}

init();