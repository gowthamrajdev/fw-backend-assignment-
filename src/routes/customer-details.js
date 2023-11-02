import express from 'express';
import { getCustomerDetails, getCustomerDetailsByPhone } from '../service/customer-details-service';

const router = express.Router();


router.get('/', function(req, res, next) {
    const { phoneNumber } = req.query;
    if (phoneNumber) {
        getCustomerDetailsByPhone(phoneNumber)
        .then(customerDetails => {
            res.json(customerDetails)
        }).catch(err => next(err));
    } else {
        getCustomerDetails()
        .then(allCustomerDetails => {
            res.json(allCustomerDetails)
        }).catch(err => next(err));
    }
    
});


module.exports = router;
