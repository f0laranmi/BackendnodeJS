require('dotenv').config()
const express = require ("express")
const app= express()
const PORT = 5000
const mongoose = require ("mongoose")
const customerRouter = require("./routes/customerRouter")

// establish a connection to db
// const dbUri=
// "mongodb+srv://f0la:Imans1998s.@f0la.abadhpv.mongodb.net/?retryWrites=true&w=majority"

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
       app.listen(PORT, () => {
    console.log("server running");
    })
    } catch (error) {
        console.log(error);
    }
}
connectDb()



// middlewares.
app.use(express.json())
const requestLogger = (req, res, next) => {
    const logger = {
        url: req.url,
        method: req.method,
        year: new Date().getFullYear(),
    }
    console.log(logger);
    next()
} 
app.use(requestLogger)

const auth = (req, res, next) => {
    const isLoggedin = false;
    if (isLoggedin){
    next()
} else {
    res.status(401).send("<h1>NOT AUTHORIZED</h1>")
}
}
app.use("/api/customers", customerRouter)

// requests and responses

app.get ("/", (req,res) => {
res.status(200).send ("<h1>Welcome to the home page</>")
})

app.get ("/contact", auth, (req, res) => {
    res.status(200).send ("<h1>contact form</>")
})

// error routes
app.get ("*", (res,req) => {
    res.status(404).send (`<h1>Error Page</> <a href ='/'>Go back home</>`)
})

