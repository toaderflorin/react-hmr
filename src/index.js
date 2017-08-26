const express = require('express');
const app = express();
const fs = require('fs');
const guid = require('guid');

const tasks = [];

const start = async () => {
  app.use(express.static(__dirname + '/static'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.listen(3000, () => console.log('Started successfully, open localhost:3000.'));

  app.get('/tasks', (req, res) => {    
    res.send(tasks);
  });

  app.post('/tasks', (req, res) => {
    res.statusCode = 200;
    const guid = guid.raw();
    const taskText = req.body.task;

    const obj = {
      guid,
      taskText
    };

    tasks.push(obj);
    res.send('');
  });

  app.delete('/tasks/:id', (req, res) => {    
    tasks.indexOf()    
    res.statusCode = 200;
    res.send('');
  });

  app.get('/', (req, res) => {    
    let contents = fs.readFileSync('content/index.html', 'utf8');
    res.send(contents);
  });
}

start();