import React, { useState } from 'react';
import './Academic.css';

const AcademicDetails = () => {
  const [degrees, setDegrees] = useState([]);
  const [degreeForm, setDegreeForm] = useState(null);
  const [degreeFormError, setDegreeFormError] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!degreeForm.degreeName || !degreeForm.degreeStudy || !degreeForm.gradingScale || !degreeForm.gradeObtained || !degreeForm.degreeStartYear || !degreeForm.degreeEndYear) {
      setDegreeFormError('All fields are required.');
      return;
    }

    setDegrees([...degrees, degreeForm]);
    setDegreeForm(null);
  };

  const handleEditSubmit = (event, index) => {
    event.preventDefault();

    if (!degreeForm.degreeName || !degreeForm.degreeStudy || !degreeForm.gradingScale || !degreeForm.gradeObtained || !degreeForm.degreeStartYear || !degreeForm.degreeEndYear) {
      setDegreeFormError('All fields are required.');
      return;
    }

    const updatedDegrees = [...degrees];
    updatedDegrees[index] = degreeForm;

    setDegrees(updatedDegrees);
    setDegreeForm(null);
  };

  const handleDeleteClick = (index) => {
    const updatedDegrees = [...degrees];
    updatedDegrees.splice(index, 1);

    setDegrees(updatedDegrees);
  };

  const handleEditClick = (index) => {
    setDegreeForm(degrees[index]);
  };

  const renderDegreeForm = () => {
    if (!degreeForm) {
      return null;
    }

    return (
      <div className="form-container">
        <h2>{degreeForm.id ? 'Edit ' : 'Add Publication'}</h2>
        <form onSubmit={degreeForm.id ? ((event) => handleEditSubmit(event, degreeForm.id)) : handleFormSubmit}>
          {degreeFormError && <p className="form-error">{degreeFormError}</p>}
          <div className="form-group">
            <label htmlFor="degree-name">Title :</label>
            <input type="text" id="degree-name" name="degreeName" value={degreeForm.degreeName} onChange={(event) => setDegreeForm({ ...degreeForm, degreeName: event.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="degree-study">Author List:</label>
            <input type="text" id="degree-study" name="degreeStudy" value={degreeForm.degreeStudy} onChange={(event) => setDegreeForm({ ...degreeForm, degreeStudy: event.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="grading-scale">Published in Journal:</label>
            <input type="text" id="grading-scale" name="gradingScale" value={degreeForm.gradingScale} onChange={(event) => setDegreeForm({ ...degreeForm, gradingScale: event.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="grade-obtained">Summary of work:</label>
            <input type="text" id="grade-obtained" name="gradeObtained" value={degreeForm.gradeObtained} onChange={(event) => setDegreeForm({ ...degreeForm, gradeObtained: event.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="degree-start-year">Start Year:</label>
            <input type="text" id="degree-start-year" name="degreeStartYear" value={degreeForm.degreeStartYear} onChange={(event) => setDegreeForm({ ...degreeForm, degreeStartYear: event.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="degree-end-year">End Year:</label>
            <input type="text" id="degree-end-year" name="degreeEndYear" value={degreeForm.degreeEndYear} onChange={(event) => setDegreeForm({ ...degreeForm, degreeEndYear: event.target.value })} required />
          </div>
          <button type="submit">{degreeForm.id ? 'Save Changes' : 'Add Publication'}</button>
        </form>
      </div>
    );
  };

  return (
    <div className="academic-details-container">
      {/* <h2>Academic Details</h2> */}
      <div className="degrees-container">
        {degrees.map((degree, index) => (
          <div key={index} className="degree-card">
            <div className="degree-info">
              <h2>{degree.degreeName}</h2>
              <p>{degree.degreeStudy}</p>
              <p>{degree.gradingScale}</p>
              <p>{degree.gradeObtained}</p>
              <p>{degree.degreeStartYear} - {degree.degreeEndYear}</p>
            </div>
            <div className="degree-actions">
              <button onClick={() => handleEditClick(index)}>Edit</button>
              <button onClick={() => handleDeleteClick(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {renderDegreeForm()}
      <button className="add-degree-button" onClick={() => setDegreeForm({})}>Add Publication</button>
    </div>
  );
};

export default AcademicDetails;
