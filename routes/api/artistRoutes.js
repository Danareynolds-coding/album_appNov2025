const router = require('express').Router()

const {artistDao:dao} = require('../../daos/dao')

router.get('/', (req, res)=> {
  dao.findAll(req, res, dao.table)
})
router.get('/sort/:sorter',(req, res)=> {
  dao.sort(res, dao.table, req.params.sorter)
})
router.get('/:id', (req,res)=>{
  dao.findById(res, dao.table, req.params.id)
})
// router.post('/create', (req, res)=> {
//   dao.create(req, res, dao.table)
// })

module.exports = router






