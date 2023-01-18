const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//MiddleWare Parse Json

app.use(express.json());

//app.use(express.static('./public'));


app.get('/hello', (req, res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks)


const port = 3000;

app.listen(port, () => {
    console.log(`Server Listening on port ${port}....`);
})