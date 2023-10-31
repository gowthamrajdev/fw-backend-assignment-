import CustomerDetails from "../../models/customer-details";


const getCustomerDetails = () => {
    return CustomerDetails.findAll();
};

export {
    getCustomerDetails
}