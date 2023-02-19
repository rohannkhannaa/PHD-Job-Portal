import React, { useState } from 'react';
import './Academic.css';

export default function AcademicDetailsForm() {
  const [showForm, setShowForm] = useState(false);
  const [instituteName, setInstituteName] = useState('');
  const [instituteLocation, setInstituteLocation] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [stream, setStream] = useState('');
  const [performanceScale, setPerformanceScale] = useState('');
  const [grade, setGrade] = useState('');
  const [degreeType, setDegreeType] = useState('Class10');
  const [academicDetails, setAcademicDetails] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newDetails = {
      instituteName,
      instituteLocation,
      startYear,
      endYear,
      stream,
      performanceScale,
      grade,
      degreeType
    };
    setAcademicDetails([...academicDetails, newDetails]);
    setShowForm(false);
  };

  const renderForm = () => {
    return (
      <form className="AcademicDetailsForm" onSubmit={handleSubmit}>
        <label>
          Institute Name:
          <input
            type="text"
            value={instituteName}
            onChange={(event) => setInstituteName(event.target.value)}
          />
        </label>
        <label>
          Institute Location:
          <input
            type="text"
            value={instituteLocation}
            onChange={(event) => setInstituteLocation(event.target.value)}
          />
        </label>
        <label>
          Start Year:
          <input
            type="text"
            value={startYear}
            onChange={(event) => setStartYear(event.target.value)}
          />
        </label>
        <label>
          End Year:
          <input
            type="text"
            value={endYear}
            onChange={(event) => setEndYear(event.target.value)}
          />
        </label>
        <label>
          Stream:
          <input
            type="text"
            value={stream}
            onChange={(event) => setStream(event.target.value)}
          />
        </label>
        <label>
          Performance Scale:
          <input
            type="text"
            value={performanceScale}
            onChange={(event) => setPerformanceScale(event.target.value)}
          />
        </label>
        <label>
          Grade:
          <input
            type="text"
            value={grade}
            onChange={(event) => setGrade(event.target.value)}
          />
        </label>
        <label>
          Degree Type:
          <select value={degreeType} onChange={(event) => setDegreeType(event.target.value)}>
            <option value="Class10">Class 10</option>
            <option value="Class12">Class 12</option>
            <option value="Btech">B.Tech</option>
            <option value="Mtech">M.Tech</option>
          </select>
        </label>
        <button type="submit">Save Details</button>
      </form>
    );
  };

  const renderAcademicDetails = () => {
    return (
      <div className="AcademicDetails">
        {academicDetails.map((details, index) => (
          <div className="AcademicDetailsCard" key={index}>
            <div>Institute Name: {details.instituteName}</div>
            <div>Institute Location: {details.instituteLocation}</div>
            <div>Start Year: {details.startYear}</div>
            <div>End Year: {details.endYear}</div>
            <div>Stream: {details.stream}</div>
            <div>Performance Scale: {details.performanceScale}</div>
            <div>Grade: {details.grade}</div>
            <div>Degree Type: {details.degreeType}</div>
          </div>
        ))}
      </div>
    );
  }  
  renderForm();
};

