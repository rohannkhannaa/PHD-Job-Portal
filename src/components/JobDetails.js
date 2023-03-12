import React from "react";
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import {Link} from "react-router-dom";

function JobDetails(){
  const {id}=useParams();
  const [job,setJob]=useState({});
  const url='http://localhost:4000/job-details/'+id;

  useEffect(() => {
  axios.get(url)
    .then((response) => {
      setJob(response.data);
    })
    .catch((err) => console.log(err));
  },[]);



  return(
    <Container className="jobs" style={{padding: '20px', margin:'auto',marginTop:'40px', boxShadow: '0 0 5px', width:'75%'}}>
    <h3 style={{textAlign:'left'}}>{job.title}</h3>
    <p>College: {job.college}</p>
    <p>Location: {job.location}</p>
    <p>Salary: {job.salary}</p>
    <p>Contact us at: {job.contactEmail}</p>
    <p>Description: {job.description}</p>
    <Link to ="/"><Button variant="outline-dark">Apply</Button></Link>
    </Container>
  )

}

export default JobDetails;
