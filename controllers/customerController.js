const CUSTOMERS = require('../models/customers')

const getAllCUSTOMERS = (req,res) => {
    res.status(200).json({Customers: CUSTOMERS, numofCustomers: CUSTOMERS.length})
}

const getACUSTOMER = (req,res) => {
    // console.log(req.params);
    const {customerId} = req.params // <=req.params.customerId)
    const customer = CUSTOMERS.find((c) => c.id === parseInt(customerId))
    if (!customer) {
        return res.status(404).json({
            success: false,
            msg:`Customer with the id: ${customerId} not found`
        })
    }
  res.status(200).json({success: true, customer})
}

const createCUSTOMER = (req,res) => {
    const{name} = req.body
    if(!name) {
        return res.status(400).json({success: false, msg: "Please provide a name"})
    }
    const newCUSTOMER = {
        id: 6,
        name,
    }
    res.status(201).json({success: true, customers: [...CUSTOMERS, newCUSTOMER]})
}

const updateCUSTOMER = (req,res) => {
   const {customerId} = req.params
   const {name} = req.body
   
   if (!name) {
    return res.status(400).json({msg: 'provide a name'})
   }
   const updatedCustomers = CUSTOMERS.filter((c) => {
    if (c.id === parseInt(customerId)){
            c.name =name
        }
        return c
   })
   res.status(200).json({customers: updatedCustomers})
}

const deleteCUSTOMER = (req,res) => {
   const  {customerId}= req.params
   const customer = CUSTOMERS.find((c) => c.id === parseInt(customerId))
    if (!customer) { 
        return res.status(404).json({
            success: false,
            msg:`Customer with the id: ${customerId} not found`
        })
    }

    const remainingCUSTOMERS = CUSTOMERS.filter(
        (c) => c.id !== parseInt(customerId)
    )

    res.status(200).json({customers: remainingCUSTOMERS})
}

module.exports = {
    getAllCUSTOMERS,
    getACUSTOMER,
    createCUSTOMER,
    updateCUSTOMER,
    deleteCUSTOMER}