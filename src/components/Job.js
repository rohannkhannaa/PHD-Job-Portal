import React from "react";
import ReactDOM from "react-dom";
import JobCard from "./JobCard";
import {useState,useEffect} from "react";
import axios from 'axios';


function Job(){

    const [jobs,setJobs]=useState([]);
    const url='http://localhost:4000/';

    useEffect(() => {
    axios.get(url)
      .then((response) => {
        setJobs(response.data);
      })
      .catch((err) => console.log(err));
  }, []);




  return(
    <div style={{width:'75%', margin:'auto', marginTop:'50px'}}>
      {jobs.map( job => (
        <JobCard
          key={job._id}
          _id={job._id}
          title={job.title}
          college={job.college}
          location={job.location}
          salary={job.salary}
           />
      ))}
    </div>);
}

export default Job;
