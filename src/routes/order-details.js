import express from 'express';
import { getOrderDetails } from '../service/order-details-service';

const router = express.Router();


router.get('/', function(req, res, next) {
    const { customerId } = req.query;
    getOrderDetails(customerId)
    .then(result => {
        res.json(result);
    }).catch(err => next(err));
});

module.exports = router;
