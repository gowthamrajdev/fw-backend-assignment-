import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

var indexRouter = require('./routes/index');
var customerDetailsRouter = require('./routes/customer-details');

const app = express();

app.use(session({ secret: 'MYSECRET',saveUninitialized: false, resave: false, cookie: {secure: false} })); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


app.use(function(req, res, next) {
    next();
})

app.use('/', indexRouter);
app.use('/customer-details', customerDetailsRouter);


export default app;