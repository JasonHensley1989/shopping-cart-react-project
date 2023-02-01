// first create library variable, followed by port to connect to
// then create a server function that ties the library to the server
//  create if else statements based on connnection to server
// if server writing is correct then at localhost:3000 should display the server variable



const http = require('http')
const port = 3000

const server = http.createServer(function(req, res) {
    res.write("Hello Node")
    res.end()
})

server.listen(port, function(error) {
    if(error) {
        console.log("Error", error)
    } else {
        console.log("Server listening on port " + port)
     }
})