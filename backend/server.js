const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes')
const itemRoutes = require('./routes/itemRoutes')

//express app
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    next();
})

//routes
app.use('/api/auth', userRoutes);
app.use('/api/items', itemRoutes);

//db & port
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        const server = app.listen(process.env.PORT, () => {
            console.log("!listening on port " + process.env.PORT);
        })
        console.log("DB connected!!")
    })
    .catch((err) => {
        console.log(err);
    })