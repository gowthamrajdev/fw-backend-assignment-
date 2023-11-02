import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

const indexRouter = require('./routes/index');
const customerDetailsRouter = require('./routes/customer-details');
const orderDetailsRouter = require('./routes/order-details');

const app = express();
const port = 80;

app.use(session({ secret: 'MYSECRET',saveUninitialized: false, resave: false, cookie: {secure: false} })); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
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