const con = require('../../config/dbconfig')
const {queryAction} = require('../../helpers/queryAction')

const artistDao ={
  table:'artist',
  //meth to access data  ex find albums by artist
  
  
  findAlbumsByArtist:(res, table,id)=> {
    let albums = []
    let sql = `SELECT al.album_id, title, yr_released FROM album WHERE artist_id = ${id};`

    con.query(
      sql,
      (error, rows)=> {
        if (!error){
          Object.values(rows).forEach(obj => {
            albums.push(obj)            
          })
          //console.log(albums)
          con.query(
            `SELECT * FROM ${table} WHERE ${table}_id = ${id};`,
            (error, rows)=> {
              rows.forEach(row =>{
                row.albums = albums
              })
              if (!error) {
                res.json(...rows)
              }else{
                console.log('DAO ERROR:', error)
              }
            }
          )
         }else{
          res.json({
             message:'error',
             table:`${table}`,
             error: error
          })
        }
      }
    )
  }
}


module.exports = artistDao
