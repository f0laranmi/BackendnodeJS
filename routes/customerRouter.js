const express = require('express')
const router = express.Router()

const{
    getAllCUSTOMERS,
    getACUSTOMER,
    createCUSTOMER,
    updateCUSTOMER,
    deleteCUSTOMER} = require("../controllers/customerController")

// router.get("/api/customers", getAllCUSTOMERS)
// router.post("/api/customers", createCUSTOMER)

router.route("/api/customers").get(getAllCUSTOMERS).post(createCUSTOMER)


// router.get("/api/customers/:customerId", getACUSTOMER)
// router.delete("/api/customers/:customerId", deleteCUSTOMER)
// router.patch("/api/customers/:customerId", updateCUSTOMER)

// router.route("/api/customers/:customerId")
// .get(getACUSTOMER)
// .delete(deleteCUSTOMER)
// .patch(updateCUSTOMER)

router
.route("/:customerId")
.get(getACUSTOMER)
.delete(deleteCUSTOMER)
.patch(updateCUSTOMER)






module.exports = router