const express = require('express')
const app = express()
const fs = require('fs')

const start = async () => {
  app.use(express.static(__dirname + '/static'))
  app.listen(3000, () => console.log('Started successfully, open localhost:3000.'))

  app.get('/', (req, res) => {    
    let contents = fs.readFileSync('content/index.html', 'utf8');
    res.send('heloooo');
  })

  app.get('/tasks', (req, res) => {    
    let contents = fs.readFileSync('content/index.html', 'utf8');
    let x = ['bla bla bla', 'asdasdas'];
    res.send(x);
  })
}

start()