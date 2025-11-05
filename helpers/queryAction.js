const queryAction = (obj, error, r, t)=> {
  if(!error){
    if (r.length === 1){
      obj.json(...r)
    }else{
      obj.json(r)
    }
  }else{
    console.log(`DAO Error: ${error}`)
       obj.json({
            "message":'error',
            'table':`${t}`,
            'error':error
       })      
  }
}

module.exports ={queryAction}          
         