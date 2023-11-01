import freshdeskDataBase from "../initializers/freshdesk-database";
import Sequelize from 'sequelize';

const OrderDetails = freshdeskDataBase.define('order_details', {
    customerId: {type: Sequelize.INTEGER},
    productName: {type: Sequelize.STRING},
    quantity: {type: Sequelize.INTEGER},
    price: {type: Sequelize.BIGINT},
    paymentType: {type: Sequelize.STRING},
    paymentStatus: {type: Sequelize.STRING},
    orderNumber: {type: Sequelize.BIGINT},
    createdAt: {type: Sequelize.DATE},
    updatedAt: {type: Sequelize.DATE}
},{
    freezeTableName: true,
});

export default OrderDetails;