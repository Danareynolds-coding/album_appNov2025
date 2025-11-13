const con = require('../../config/dbconfig')
const {queryAction} = require('../../helpers/queryAction')
const { findAll } = require('../Common/daoCommon')

const albumDao ={
  table:'album',
  findAlbumInfo:(res, table)=>{
   
    const sql = `SELECT al.album_id, al.title, al.artist_id, al.band_id, al.lable_id, al.yr_released,
    CASE
        WHEN ar.fName IS NULL THEN ''
        ELSE ar.fName
        END fName,
    CASE
        WHEN ar.lName IS NULL THEN ''
        ELSE ar.lName
        END lName,
    CASE 
        WHEN b.band IS NULL THEN ''
        ELSE b.band
        END band,
    l.lable
    FROM album al
    LEFT OUTER JOIN artist ar USING (artist_id)
    LEFT OUTER JOIN band b USING (band_id)
    JOIN lable l USING (lable_id)
    ORDER BY al.album_id;`
    con.query(
    sql,
    (error, rows)=> {
        queryAction(res, error, rows, table)
      }
    )
  },
  
  findAlbumsByArtistId:(res, table, id)=>{
      const sql =`SELECT title, album_id, yr_released FROM ${table} WHERE artist_id = ${id};`

      con.query(
        sql, 
        (error, rows)=> {
          queryAction(res, error, rows, table)
        }
    )
  },
  createAlbum (req, res, table)
    const fName = req.body.fName
    const lName = req.body.lName
    const band = req.body.band
    const label = req.body.label

    const data = {
      artist_id: null,
      band_id: null,
      label_id: null
    }
}

module.exports = albumDao