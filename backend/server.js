require('dotenv').config()

const express = require('express')

// express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// react to requests, a route handler. 'req' is request object, 'res' response object what we're sending back to the caller
app.get('/', (req, res) => {
    res.json({msg: 'welcome to the app'})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})