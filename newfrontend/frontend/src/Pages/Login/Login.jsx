import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { mutate:loginMutation, isPending, isError, error}= useMutation({
    mutationFn: async ({ email, password }) => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/login",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
          credentials: 'include', // This will include cookies in the request
        });

        const data = await res.json();
        console.log("res ",data)
        if(!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        
        localStorage.setItem('token', data.jwtToken);


      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      toast.success("Login success");
    }
    
  });

  //const [error, setError] = useState(null);

  //const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginMutation(formData);
  };

  return (
    <div className='login-form'>
      <div className="login-form-container" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <form className='form-container'>
          <div className="input-fields">
            <label htmlFor="email">Email:</label>
            <input 
             type="text"
             name="email"
             placeholder='Enter your email here'
             value={formData.email}
             onChange={handleChange}
             required
            />
          </div>
          <div className="input-fields">
            <label htmlFor="password">Password:</label>
            <input 
            type="password"
            name="password"
            placeholder='Enter your password here'
            value={formData.password}
            onChange={handleChange}
            required
            />
          </div>
          <div className="log-button">
            <button>Continue</button>
          </div>
        </form>
        <hr />
        <div className="no-account">
          <p>Do not have an Account?</p>
          <div className="accounts">
            <Link to={'/signup'} className='account-links'><span>Sign Up</span></Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
