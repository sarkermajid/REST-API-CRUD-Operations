const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users.route');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Home Route
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/users', userRouter);

// Route Not Found
app.use((req,res,next)=>{
    res.status(404).json({
        message: 'Resource not found',
    })
});

// server err
app.use((err,req,res,next) => {
    res.status(500).json({
        message : 'Server Broken',
    })
});



module.exports = app;