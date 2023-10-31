import express from 'express';
import { getCustomerDetails } from '../service/customer-details-service';

const router = express.Router();


router.get('/', function(req, res, next) {
    getCustomerDetails()
    .then(allCustomerDetails => {
        res.json(allCustomerDetails)
    })
});

module.exports = router;
