import React ,{ useContext } from 'react';
// import './StatusPage.module.css'; // This doesn't work; go with index.css
import { useLocation } from 'react-router-dom';
import { AppContext } from './AppContext';

const StatusPage = () => {
  const { formData } = useContext(AppContext);
  const { name, age, mobileNum, gender, dob, addr } = formData;
  return (
    <div className="container">
      <h1 className="title">Status Page</h1>
      <p>Thank you for submitting your vote!</p>

      <h2>Submitted Details:</h2>
      <p className="submitted-details">Name: {name}</p>
      <p className="submitted-details">Age: {age}</p>
      <p className="submitted-details">Mobile Number: {mobileNum}</p>
      <p className="submitted-details">Gender: {gender}</p>
      <p className="submitted-details">Date of Birth (DOB): {dob}</p>
      <p className="submitted-details">Address: {addr}</p>

      <button className="status-button" onClick={() => {
        alert("Done");
      }}>Success</button>
    </div>
  );
};

export default StatusPage;
