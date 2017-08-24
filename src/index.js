const express = require('express')
const app = express()
const fs = require('fs')

const start = async () => {
  app.use(express.static(__dirname + '/static'))
  app.listen(3000, () => console.log('Started successfully, open localhost:3000.'))

  app.get('/', (req, res) => {
    console.log('got here')
    var contents = fs.readFileSync('content/index.html', 'utf8')    
    res.send('heloooo')
  })
}

start()