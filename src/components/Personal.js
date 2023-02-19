import React, { useState } from 'react';
import './Personal.css'; // import the CSS file

export default function UserProfile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('Male'); 
  const [category, setCategory] = useState('General');
  const [permanentAddress, setPermanentAddress] = useState('123 Main St, Anytown');
  const [currentAddress, setCurrentAddress] = useState('456 Broadway, Anytown');

  const handleSubmit = (event) => {
    event.preventDefault();
    // save user profile data
    setIsEditMode(false);
  };

  const handleCancel = () => {
    // reset user profile data to previous values
    setIsEditMode(false);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  return (
    <div className="userProfile">
      {!isEditMode ? (
        <>
          <div className="userProfileData">
            <table>
              <tr>
                <td><strong>Name: </strong></td> 
                <td>{name}</td>
              </tr>
              <tr>
                <td><strong>Age: </strong></td> 
                <td>{age}</td>
              </tr>
              <tr>
                <td><strong>Gender: </strong></td> 
                <td>{gender}</td>
              </tr>
              <tr>
                <td><strong>Category: </strong></td> 
                <td>{category}</td>
              </tr>
              <tr>
                <td><strong>Permanent Address: </strong></td> 
                <td>{permanentAddress}</td>
              </tr>
              <tr>
                <td><strong>Current Address: </strong></td> 
                <td>{currentAddress}</td>
              </tr>
            </table>
            <button className="editButton" onClick={handleEdit}>
              Edit
            </button>

          </div>
          <img
            src="https://via.placeholder.com/150"
            alt="User Profile"
            className="userProfileImage"
          />
        </>
      ) : (
        <form onSubmit={handleSubmit} className="userProfileForm">
          <table>
          <tr>
            <td>
            Name:
            </td>
            <td>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            </td>
          </tr>
          <tr>
            <td>
            Age:
            </td>
            <td>
            <input
              type="number"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
            </td>
          </tr>
          <tr>
            <td>
            Gender:
            </td>
            <td>
            <select value={gender} onChange={(event) => setGender(event.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            </td>
          </tr>
          <tr>
            <td>
            Category:
            </td>
            <td>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="General">General</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="OBC">OBC</option>
            </select>
            </td>
          </tr>
          <tr>
            <td>
            Permanent Address:
            </td>
            <td>
            <textarea
              value={permanentAddress}
              onChange={(event) => setPermanentAddress(event.target.value)}
            />
            </td>
          </tr>
          <tr>
            <td>
            Current Address:
            </td>
            <td>
            <textarea
              value={currentAddress}
              onChange={(event) => setCurrentAddress(event.target.value)}
            />
            </td>
          </tr>
          <div className="userProfileFormButtons">
            <button type="submit" className="saveButton">Save</button>
            <button type="button" className="cancelButton"onClick={handleCancel}>
              Cancel
            </button>
          </div>
          </table>
        </form>
      )}
    </div>
  );
}
