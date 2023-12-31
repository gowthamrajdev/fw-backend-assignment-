import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
var https = require('https');
var fs = require('fs');

const indexRouter = require('./routes/index');
const customerDetailsRouter = require('./routes/customer-details');
const orderDetailsRouter = require('./routes/order-details');

const app = express();

// Port should point 443 for running the App in AWS
const port = 3001;
const IP = '0.0.0.0';

app.use(session({ secret: 'MYSECRET',saveUninitialized: false, resave: false, cookie: {secure: false} })); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// comment out the below listen for running the App in AWS
app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});

// Enable the below options and server for running the App in AWS
// var options = {
//     key: fs.readFileSync('/home/ubuntu/fw-backend-assignment-/private.key'),
//     cert: fs.readFileSync('/home/ubuntu/fw-backend-assignment-/certificate.crt'),
//     requestCert: false,
//     rejectUnauthorized: false
// };

// var server = https.createServer(options, app).listen(port, IP,  function(){
//     console.log(`server started at port ${port}`);
// });

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/ping', (req, res) => {
    res.send('pong');
});


app.use(function(req, res, next) {
    next();
})

app.use('/', indexRouter);
app.use('/customer-details', customerDetailsRouter);
app.use('/order-details', orderDetailsRouter);


export default app;