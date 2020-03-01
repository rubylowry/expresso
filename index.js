const express = require('express');
const app = express();//top-level function of express

const path = require('path');
const apiData = require('./')

const port = 3000;

app.use((req,res,next)=>{
  console.log(`${req.method} request for ${req.url} `);
  next();
})

//used to send a default message before routing
// app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.static('public'));//all files from public folder must be included

// set the route for index.html
app.get('/', (req,res,)=>{
  res.sendFile(path.join(__dirname+'/public/index.html'));
});



app.listen(port, () => console.log(`This app is listening on port ${port}!`))
