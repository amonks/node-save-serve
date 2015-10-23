// set up server
var app = require('express')()
var cors = require('cors')

app.use(cors())

var canvasdata

// set up routes
app.get('/serve', function (req, res) {
  res.send(canvasdata)
})

app.post('/save', function (req, res) {
  canvasdata = req.body
})

// start the server
var server = app.listen(process.env.PORT, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('CORS-enabled server listening at http://%s:%s', host, port)
})
