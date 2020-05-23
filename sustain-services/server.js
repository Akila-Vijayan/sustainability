const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const sustainRoutes = express.Router();
const PORT = 4000;

let Sustainability = require('./sustainability.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/sustainability',{useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function(){
  console.log("MongoDB Database connection establised successfully");
})

sustainRoutes.route('/register').post(function(req,res){
  console.log("Post method");
  console.log(req.body);

  let sustainability = new Sustainability(req.body);
  sustainability.save()
                .then(sustainability => {
                  res.status(200).json({'sustainability' :'registered successfully'});
                })
                .catch(err => {
                  res.status(400).send('registration failed');
                });
});

app.use('/sustain', sustainRoutes);

app.listen(PORT, function(){
  console.log("Server is running on Port :" + PORT);
})
