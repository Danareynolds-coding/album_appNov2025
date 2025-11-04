//step 6
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

//step7 root route => http://localhost:3000/api
router.get('/api', (req, res)=> {
 // res.send('api') ck if working then set up
    res.json({
      'allAlbums':`http://localhost:${PORT}/api/album`
      //ck if working
    })
})
//step 8 error handling
router.use((req, res, next)=>{
  res.status(404)
  .send("<h1>This page does not exist!</h1>")
})

//step6
module.exports = router