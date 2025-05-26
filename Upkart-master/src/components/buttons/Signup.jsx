import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import "./signup.css"

const Signup = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [emailExistsError, setEmailExistsError] = useState('');
  const [mobileNumberExistsError, setMobileNumberExistsError] = useState('');
  // const [Incorrect, setIncorrect] = useState('');
  const navigate = useNavigate();

  const handleEmailBlur = async () => {
    if (email) {
      try {
        const response = await axios.get(`http://127.0.0.1:8181/api/v1/auth/email-exists?email=${email}`);
        if (response.status === 200) {
          setEmailExistsError('');
        }
      } catch (error) {
        console.error('Error checking email:', error);
        setEmailExistsError('*Email already exists');
      }
    } else {
      setEmailExistsError('');
    }
  };

  
  const handleMobileNumberBlur = async () => {
    if (mobile) {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8181/api/v1/auth/mobile-number-exists?mobileNumber=${mobile}`
        );
        if (response.status === 200) {
          const { exists } = response.data;
          if (exists) {
          
            setMobileNumberExistsError('*Mobile number already exists');
          } else {
            
            setMobileNumberExistsError('');
          }
        } else {
          
          setMobileNumberExistsError('');
        }
      } catch (error) {
        
        console.error('Error checking mobile number:', error);
        setMobileNumberExistsError('');
      }
    } else {
      setMobileNumberExistsError('');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try { 
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/register', {
        name :name,
        email:email,
        mobilenumber:mobile,
        password:password,
        // category:role,
      });

      if (response.status === 200) {
        // setPopupMessage('Registered Successfully');
        navigate('/');
        setName('');
        setMobile('');
        setPassword('');
        setEmail('');
      }
    } catch (error) {
      console.error('Error: ', error);
    }

  };

  return (
    <div>
      {/* Customer button */}
      <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
        <span className="fa fa-user-plus me-1"></span> Customer Register
      </button>

      {/* Vendor button
      <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
        <span className="fa fa-user-plus me-1"></span> Vendor Register
      </button> */}

      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Registration</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <form onSubmit={handleSignUp}>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="exampleInputName" value={name} onChange={e => setName(e.target.value)}  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputMobile" className="form-label">Mobile Number</label>
                  <input type="text" className="form-control" id="exampleInputMobile" value={mobile} onChange={e => setMobile(e.target.value)} onBlur={handleMobileNumberBlur}/>
                </div>
                <div className="message">
              {mobileNumberExistsError && (
                <p>{mobileNumberExistsError}</p>
                )}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)}  onBlur={handleEmailBlur}/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="message">
              {emailExistsError && <p>{emailExistsError}</p>}
              </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
