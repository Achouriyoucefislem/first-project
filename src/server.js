const { json } = require('express')
let cors = require('cors')

let server = require('express')()

server.use(cors())
server.get( '/' , (req,res) => {
  res.setHeader( 'content-type' , 'application/json' )
  res.status(200)
  res.json( { name : 'youcef', age : '18' } )
} )

server.listen( 5000 , () => console.log('listening on port 5000') )