import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";


function JobCard(jobs){
  return(
    <Container className="jobs" style={{padding: '20px', margin:'20px', boxShadow: '0 0 3px', border:'0'}}>
      <Link to = {'/job-details/'+jobs._id} style = {{color : 'black', textDecoration : 'none',}} >
        <h1 style={{margin:'0', padding:'0', color:'black', textAlign:'left'}}>{jobs.title}</h1>
        <h4>{jobs.college}</h4>
        <p><i class="fi fi-rs-marker"></i> {jobs.location}</p>
        <p>{jobs.salary}</p>
      </Link>
    </Container>
  );
}

export default JobCard;
