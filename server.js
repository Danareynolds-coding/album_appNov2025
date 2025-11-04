//step1
const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000


//step1
server.listen(PORT, ()=> console.log(`Server is at port ${PORT}!!!!`))