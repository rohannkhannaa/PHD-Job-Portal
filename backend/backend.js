const express = require('express');
const app = express();
const { connect } = require('mongoose');
const mongoose = require("mongoose");
const { urlencoded, json } = require('body-parser');
const Job = require('./job.model');
const bodyParser = require("body-parser");
var cors = require('cors');

app.use(cors()) ;// Use this after the variable declaration

mongoose.connect("mongodb://127.0.0.1:27017/job_post", {
  useNewUrlParser: true
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/job-post', (req, res) => {
    console.log(req.body);
  const job = new Job(req.body);
  job.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(job);
    }
  });
});

app.get('/', (req, res) => {
  Job.find({}, (err, jobs) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(jobs);
    }
  });
});

app.get('/job-details/:id', (req,res) => {
  const id=req.params.id;
  Job.findOne({_id:id}, (err,found) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(found);
    }
  })
})




app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
