import OrderDetails from "../../models/order-details"

const getOrderDetails = (customerId) => {
    return OrderDetails.findAll({where: {customerId}});
}

export {
    getOrderDetails
}