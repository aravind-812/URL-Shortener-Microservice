const express = require('express');
const port = 5000;
const app = express();
const short = require('./routes/short')
const connectDB = require('./db/short');
require('dotenv').config()

//middleWare
app.use('/api/shorturl', short)

const start = async () => {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is hosted at port ${port}`))
}

start();
