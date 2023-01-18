const express = require('express');
const mongoose = require('mongoose');
const { createPath } = require('./helpers/createPath');
const postRouter = require('./routes/routes');

require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 7000;
const HOST = process.env.HOST || 'localhost';
const DB = process.env.MONGO_URL;

app.set('view engine','ejs');
app.use(express.json());
app.use(express.static('public'));

app.use(postRouter);

app.use((req,res) => {
    res
        .status(404)
        .render(createPath('error'), { title: 'Error' });
});

const init = () => {
    try {
        // mongoose.set('strictQuery', true);
        // mongoose
        //     .connect(DB, { useNewUrlParser:true, useUnifiedTopology:true }, (error) => {
        //         if(error) throw error;
        //         console.log('Connected to DB'); 
        //     });
        app.listen(PORT, HOST, (error) => {
            if(error) throw error;
            console.log(`Server running on port ${PORT}...`);
        });
    } catch(error) {
        if(error) console.log(error);

    }
}

init();