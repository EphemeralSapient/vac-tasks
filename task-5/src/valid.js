import React, { useState, useEffect, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './valid.module.css';
import { AppContext } from './AppContext';
const initialFormState = {
  name: '',
  age: '',
  gender: '',
  mobile: '',
  dob: '',
  address: '',
};


const VotingListForm = () => {

  const [ageValid , setAgeValid] = useState(false);
  const [age, setAge] = useState(0);

  const [gender , setGender] = useState("");
  const [genderValid , setGenderValid] = useState(false);

  const [name , setName] = useState("");

  const [mobileNum , setMobileNum] = useState('');
  const [mobileNumValid, setMobileNumValid] = useState(false);

  const [dob , setDob] = useState('');
  const [addr, setAddr] = useState('');

  const [submitDisplay, setSubmitDisplay] = useState(false);
  const [statusDisplay, setStatusDisplay] = useState("");

  const navigate = useNavigate();

  const { formData, setFormData } = useContext(AppContext);

  useEffect(() => {
    const isFormValid =
      name &&
      ageValid &&
      mobileNumValid &&
      genderValid &&
      dob &&
      addr;

    setSubmitDisplay(isFormValid);
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted?");
    setFormData({ name:name, age:age, mobileNum:mobileNum, gender:gender, dob:dob, addr:addr})
    navigate('/status', { state: { statusParam: {name : name, age: age, mobileNum: mobileNum, gender:gender, dob:dob, addr:addr} } });
  };

const genderBoxHere = <label>
Gender:
<select name="gender" value={gender} onChange={(e) => {
    setGender(e.target.value);
    if(e.target.value === "") {
        setGenderValid(false);
        setStatusDisplay("Invalid gender");
    }  else {
        setGenderValid(true);
        setStatusDisplay("Enter mobile number");

    }
}} required>
  <option value="">Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
<br/>
</label>
const mobileBoxHere = <label>
Mobile:
<input
  type="tel"
  name="mobile"
  value={mobileNum}
  onChange={(e) => {
    const value = e.target.value;
    if(value !== NaN) {
        setMobileNum(value);
        if(value && value.length >= 10) {
            setMobileNumValid(true);
            setStatusDisplay("Enter DOB");                
        } else {
            setMobileNumValid(false);
            setStatusDisplay("Invalid mobile number");
        }
    }
  }}
  required
  pattern="[0-9]{10}"
  title="Enter valid 10-digit mobile number, damnit"
/>
</label>

const dobBoxHere = <label>
DOB:
<input
  type="date"
  name="dob"
  value={dob}
  onChange={(e) => {
    const value = e.target.value;
    if(value) {
        setDob(value);
        setStatusDisplay("Enter Address");
    }
  }}
  required
/>
</label>

const addrBox = <label>
Address:
<textarea
  name="address"
  value={addr}
  onChange={(e) => {
    const value = e.target.value;
    if(value !== "") {
        setSubmitDisplay(true);
        setAddr(value);
    }
  }}
  required
/>
</label>

  return (
    <div className='centered-div'>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </label>
      <br />
      
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => {
            const value = e.target.valueAsNumber;
            if(value === NaN) return;
            console.log("Age : " + value) 
            setAge(value);
            if(value >= 18) {
                setStatusDisplay("Enter gender");
                setAgeValid(true);
            }  else {
                setStatusDisplay("Must be >= 18 age");
                setAgeValid(false);
            }
          }}
          required
          min="18"
          max="100"
        />
      </label>
      <br />
    {ageValid && (genderBoxHere)}
    {genderValid && (mobileBoxHere)}
      <br />
      {mobileNumValid && (dobBoxHere)}
      <br />
      {dob!=="" && (addrBox)}
      <br />
    {submitDisplay === true ? 
    ( <input type="submit" value="Submit" disabled={!submitDisplay} />)
    :
    ( <h1>{statusDisplay}</h1>)
    }
  
    </form>
    </div>
  );
};

export default VotingListForm;
