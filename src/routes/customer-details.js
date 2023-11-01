import express from 'express';
import { getCustomerDetails } from '../service/customer-details-service';

const router = express.Router();


router.get('/', function(req, res, next) {
    getCustomerDetails()
    .then(allCustomerDetails => {
        res.json(allCustomerDetails)
    }).catch(err => next(err));
});

module.exports = router;
