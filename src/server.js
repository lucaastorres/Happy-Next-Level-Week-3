const express = require('express')
const server = express()

server.get('/', () => {
    console.log('oi')
})

server.listen(5500)