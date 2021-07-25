var express = require('express')
var socket = require('socket.io')

var app = express()
var server = app.listen(process.env.PORT || 3000)

var io = socket(server)

console.log('Socket server is running!')

io.sockets.on('connection', newConnection)


function newConnection(socket) {
    console.log(socket.id + ' connected')
    io.to(socket.id).emit("userID", { socketID: socket.id })
}