import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  // Component state for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [incorrect, setIncorrect] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
        email: email,
        password: password,
      });

      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('user', JSON.stringify(user));
      setIsSubmitted(true); // Set isSubmitted to true after successful login
      setIncorrect('Successfully Logged In');

      // Call the onLogin function passed from the parent component
      onLogin();

      // Redirect to the home page after successful login
      navigate('/');
    } catch (error) {
      console.error('Error: ', error);
      alert('Invalid credentials');
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setIsSubmitted(false);
    setIncorrect('');
  };

  return (
    <>
      {isSubmitted ? ( // Render the success message if the form is submitted
        <div>
          <p>{incorrect}</p>
          <p>Successfully logged in!</p>
          <button onClick={resetForm}>Login again</button>
        </div>
      ) : (
        <div>
          <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
            <span className="fa fa-sign-in me-1"></span> Customer Login
          </button>

          <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Login
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSignIn}>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                      </label>
                      <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                      </label>
                    </div>
                    <div className="message">
                      {incorrect && <p>{incorrect}</p>}
                    </div>
                    <button type="submit" className="btn btn-outline-primary w-100 mt-5" data-bs-dismiss="modal">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
