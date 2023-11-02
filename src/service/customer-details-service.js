import CustomerDetails from "../../models/customer-details";


const getCustomerDetails = () => {
    return CustomerDetails.findAll();
};

const getCustomerDetailsByPhone = (phone) => {
    return CustomerDetails.findAll({where: {phone}});
}

export {
    getCustomerDetails,
    getCustomerDetailsByPhone
}