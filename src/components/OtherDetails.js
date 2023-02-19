import React, { useState } from "react";
import "./OtherDetails.css";

function ResumeUploader() {
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);
  const [resumes, setResumes] = useState([]);

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleCoverLetterChange = (e) => {
    setCoverLetter(e.target.files[0]);
  };

  const handleResumeUpload = () => {
    setResumes((resumes) => [...resumes, resume]);
    setResume(null);
  };
 
  const handleResumeDelete = (index) => {
    const newResumes = [...resumes];
    newResumes.splice(index, 1);
    setResumes(newResumes);
  };

  return (
    <div className="resume-uploader">
      <h2>Resume Uploader</h2>
      <div className="upload-container">
        <div className="resume-container">
          <label htmlFor="resume">Upload Resume:</label>
          <input type="file" id="resume" onChange={handleResumeChange} />
          <button onClick={handleResumeUpload}>Upload</button>
          {resume && (
            <p className="file-name">
              {resume.name}{" "}
              <button onClick={() => setResume(null)}>Remove</button>
            </p>
          )}
        </div>
        
        <div className="cover-letter-container">
          <label htmlFor="cover-letter">Upload Resume:</label>
          <input type="file" id="cover-letter" onChange={handleResumeChange} />
          <button onClick={handleCoverLetterChange}>Upload</button>
          {coverLetter && (
            <p className="file-name">
              {coverLetter.name}{" "}
              <button onClick={() => setCoverLetter(null)}>Remove</button>
            </p>
          )}
        </div>
        
      </div>
      <div className="resumes-container">
        {resumes.map((resume, index) => (
          <div key={index} className="resume-item">
            <p className="file-name">
              {resume.name}{" "}
              <button onClick={() => handleResumeDelete(index)}>Delete</button>
            </p>
            <div className="resume-buttons">
              <button onClick={() => window.open(URL.createObjectURL(resume))}>
                View
              </button>
              <a href={URL.createObjectURL(resume)} download>
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumeUploader;
