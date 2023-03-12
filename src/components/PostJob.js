import React from "react";
import ReactDOM from "react-dom";
import {useState,useEffect} from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import "./PostJob.css";

function PostJob(){

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [college, setCollege] = useState('');


  function handleSubmit(event){
    event.preventDefault();
    const job={title,description,location,salary,contactEmail,college};
    console.log(job);
    axios.post("http://localhost:4000/job-post",job)
    .then(() => {
      console.log("Job submitted");
      window.location.reload();
    })
    .catch((err)=>{
      console.log(err);
    })

  }

  return(
    <div className="postJob" >
      <div className="formDiv" >

        <form onSubmit={handleSubmit} >
        <h3 style={{textAlign:'center'}}>Post a Job</h3>
          <div className="inputField" ><input type="text" placeholder="Job title" value={title} onChange={(e) => setTitle(e.target.value)} required/></div>
          <div className="inputField" ><input type="text" placeholder="College Name" value={college} onChange={(e) => setCollege(e.target.value)} required/></div>
          <div className="inputField" ><input type="text" placeholder="Job Location" value={location} onChange={(e) => setLocation(e.target.value)} required/></div>
          <div className="inputField" ><input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} required/></div>
          <div className="inputField" ><input type="email" placeholder="Contact email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required/></div>
          <div className="inputField" ><textarea type="text" placeholder="Job Description" value={description} onChange={(e) => setDescription(e.target.value)} required/></div>
          <div><Button variant="outline-dark" type="submit">Submit</Button></div>
        </form>
      </div>
    </div>

  )
}

export default PostJob;
