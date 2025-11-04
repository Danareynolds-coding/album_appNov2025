//step1 build server
const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000
//step2 handle security
const helmet = require('helmet')
const cors = ('cors')
// step2 dont use >server.use(helmet())configuring helmet below
server.use(helmet.contentSecurityPolicy({
    useDefaults:true,
    crossOriginResourcePolicy:false,
    crossOriginEmbedderPolicy:false,
    directives:{
      "img-src":["'self'", "https: data"],
      "scriptSrc":["'self'","cdn.jsdelivr.net"]
    }
}))
server.use(cors())
//step3 json and url setup
server.use(express.json())
server.use(express.urlencoded({extended:true}))
//step1
server.listen(PORT, ()=> console.log(`Server is at port ${PORT}!!!!`))