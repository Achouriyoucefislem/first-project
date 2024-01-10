let express = require('express')
let path = require('path')

let server = express()

server.use( express.static( __dirname , 'src' ) )

server.get( '/' , (req,res) => {
  res.sendFile( path.join( __dirname , 'public' , 'index.html' ) )
} )

server.listen( 5000 , () => console.log('listening') )