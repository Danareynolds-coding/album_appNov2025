//step 6
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

//step7 root route => http://localhost:3000/api
router.get('/api', (req, res)=> {
 // res.send('api') ck if working then set up
    res.json({
      'All Albums':`http://localhost:${PORT}/api/album`,
      'All Artists':`http://localhost:${PORT}/api/artist`,
      'All Bands':`http://localhost:${PORT}/api/band`,
      'All Lables':`http://localhost:${PORT}/api/lable`
      

    })
})

// router.use('/api/album', require('./api/artistRoutes'))
const endpoint  = [
  'album',
  'artist',
  'band',
  'lable'
]
endpoint.forEach(endpoint => {
  router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})

//step 8 error handling
router.use((req, res, next)=>{
  res.status(404)
  .send("<h1>404 Error, This page does not exist!</h1>")
})

//step6
module.exports = router