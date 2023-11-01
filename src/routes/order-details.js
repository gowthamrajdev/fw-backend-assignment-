import express from "express";
import { getOrderDetails } from "../service/order-details-service";

const router = express.Router();

router.get("/", function (req, res, next) {
  const { customerId } = req.query;
  getOrderDetails(customerId)
    .then((result) => {
      const groupByOrderNumber = result.reduce((group, order) => {
        const { orderNumber } = order;
        group[orderNumber] = group[orderNumber] ?? [];
        group[orderNumber].push(order);
        return group;
      }, {});
      res.json(groupByOrderNumber);
    })
    .catch((err) => next(err));
});

module.exports = router;
