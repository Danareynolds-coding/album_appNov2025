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
  findById:(res, table, id)=> {
    connect.query(
      `SELECT * FROM ${table} WHERE ${table}_id = ${id};`,
      (error, rows)=> {
        queryAction(res, error, rows, table)
      }
    ) 
  },
  //step
  sort:(res, table, sorter)=>{
    connect.query(
      `SELECT * FROM ${table} ORDER BY ${sorter};`,
        (error, rows)=> {
          queryAction(res, error, rows, table)
        }
      ) 
    }   
}
  


  module.exports = daoCommon