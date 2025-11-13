//step 9  dao = data access object and dao Common for general queries
const connect = require('../../config/dbconfig')
const {queryAction} = require('../../helpers/queryAction')
//step9
const daoCommon = {
  //create methods to query the db
  findAll:(req, res, table)=> {
    //.query 2 args (sql query, callback func)
    connect.query(
      `SELECT * FROM ${table};`,
      (error, rows)=> {
        queryAction(res, error, rows, table)
      }
    )
  },

  sort:(res, table, sorter)=>{
    connect.query(
      `SELECT * FROM ${table} ORDER BY ${sorter};`,
        (error, rows)=> {
          queryAction(res, error, rows, table)
        }
      ) 
    },
    findById:(res, table, id)=> {
    connect.query(
      `SELECT * FROM ${table} WHERE ${table}_id = ${id};`,
      (error, rows)=> {
        queryAction(res, error, rows, table)
      }
    ) 
  },
  create: (req, res, table)=> {
   if (Object.keys(req.body).length === 0){
    res.json({
      "error": true, 
      "message":"no fiels to create"
     })
   }else{
    const fields = Object.keys(req.body)
    //returns an array
    const values = Object.values(req.body)
    //returns an array  & execute takes 3 args 
    connect.execute(
      `INSERT INTO ${table} SET ${fields.join(' = ?, ')} = ?;`,    
      //.join each fields eg title set to ? to equal ?(? pulls from value array )example
      //fields = [name, age, occupation]
      //value = [dana, 61, developer]
      values,
      (error, dbres)=>{
        if(!error){
          res.json({
            //dbres(databaseres.insertedId)
            Last_id: dbres.insertedId
          })

        }else{
          console.log('${table')
        }
      }
    )
   }
  }
}


  module.exports = daoCommon