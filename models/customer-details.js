import freshdeskDataBase from "../initializers/freshdesk-database";
import Sequelize from 'sequelize';

const CustomerDetails = freshdeskDataBase.define('customer_details', {
    name: {type: Sequelize.STRING},
    phone: {type: Sequelize.INTEGER},
    addressLineOne: {type: Sequelize.STRING},
    pinCode: {type: Sequelize.INTEGER},
    city: {type: Sequelize.STRING},
    state: {type: Sequelize.STRING},
    createdAt: {type: Sequelize.DATE},
    updatedAt: {type: Sequelize.DATE}
},{
    freezeTableName: true,
});

export default CustomerDetails;